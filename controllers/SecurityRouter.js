const express = require("express")
const router = express.Router()
const secumodel = require("../models/SecurityModel")
const bcrypt = require("bcryptjs")
const { model } = require("mongoose")

//hash generator for password
HashGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}
//add security
router.post("/addsecurity",async(req,res)=>{
    let { data } = {"data":req.body}
    let password = data.password
    let enpassword = data.password
    const hashedPassword=await HashGenerator(password)
    data.password=hashedPassword
    let blog = new secumodel(data)
            let result = blog.save()
                 res.json({
                 status:"success"
                }
                )
                console.log(data)
                console.log(enpassword)
})
//security login
router.post("/securitylogin",async(req,res)=>{
    let data = req.body
    let empid = req.body.Empid
    let input = await secumodel.findOne({"Empid" : empid})
    if(!input){
        return res.json({
            status:"invalid id"
        })
    }
    else{
        console.log(input)
        let dbpass = input.password
        let inputpass = req.body.password
        console.log(dbpass)
        console.log(inputpass)
        const match = await bcrypt.compare(inputpass,dbpass)
        if(!match){
            return res.json({
                status:"incorrect password"
            })
        }
        else{
            res.json({
                status:"success",userdata:input
            })
        }
    }
})
router.get("/viewsecurity",async(req,res)=>{
    let output = await secumodel.find()
    res.json(
        output
    )
})
router.post("/adminlogin",async(req,res)=>{
    let data = req.body
    let username = data.username
    let password = data.password
    let orgusername = "admin"
    let orgpassword = "admin"
    if(username!=orgusername){
        res.json({
            status:"invalid username"
        })
    }
    else {
        if(password!=orgpassword){
            res.json({
                status:"incorrect password"
            }) 
        }
        else{
            res.json({
                status:"success"
            })
        }
    }

})
module.exports=router
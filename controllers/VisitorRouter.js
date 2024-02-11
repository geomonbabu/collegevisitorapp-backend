const express = require("express")
const router = express.Router()
const visitormodel = require("../models/VisitorModel")

//add visitor by security
router.post("/addvisitor",async(req,res)=>{
    let data = req.body
    let visits = new visitormodel(data)
    let result = await visits.save()
    res.json({
        status:"success"
    })
})
router.get("/viewvisitors",async(req,res)=>{
    let output = await visitormodel.find()
    .populate("userId","securityname Empid -_id")
    .exec()
    res.json({
        output
    })
})
router.post("/myvisitorlist",async(req,res)=>{
    let data = req.body
    console.log(data)
    let output = await visitormodel.find(data)
    res.json(
        output
)
})
module.exports=router
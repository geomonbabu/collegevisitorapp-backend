const mongoose = require("mongoose")

const secuSchema = new mongoose.Schema(
    {
        securityname:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        phonenumber:{
            type:String,
            required:true
        },
        joindate:{
            type:Date,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        emailid:{
            type:String,
            required:true
        },
        Empid:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }   
    }
)
module.exports = mongoose.model("security",secuSchema)
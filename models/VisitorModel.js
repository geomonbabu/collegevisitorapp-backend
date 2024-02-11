const mongoose = require("mongoose")

const visitorSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"security"
        },
        visitorname:{
            type:String,
            required:true
        },
        purposeofvisit:{
            type:String,
            required:true
        },
        phonenumber:{
            type:String,
            required:true
        },
        visiteddate:{
            type:Date,
            default:Date.now
        
        },
        gateno:{
            type:String,
            required:true
        }
    }
)
module.exports = mongoose.model("visitor",visitorSchema)
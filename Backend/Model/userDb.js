const mongoose = require("mongoose");

const patientSchema =  mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type:Number,
        // required:true,
        default:0
    }

})


const patientdetails = new mongoose.model("patientdetail",patientSchema)
module.exports = patientdetails
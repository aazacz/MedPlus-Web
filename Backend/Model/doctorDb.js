const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({

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
        required:true,
        default:0
    }

})


const Doctor= new mongoose.model("Doctor",DoctorSchema)
module.exports=Doctor
const express = require("express")
const doctorRoute = express()
const doctorController = require('../Controller/doctorController')


doctorRoute.use(express.json())
doctorRoute.use(express.urlencoded({extended:true}))

doctorRoute.post("/login", doctorController.login);
doctorRoute.post("/signup", doctorController.signup);




module.exports = doctorRoute
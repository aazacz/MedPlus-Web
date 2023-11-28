const express = require("express")
const doctorRoute = express()
const doctorController = require('../Controller/doctorController')
const auth              = require('../middleware/authentication') 

doctorRoute.use(express.json())
doctorRoute.use(express.urlencoded({extended:true}))

const Authentication = auth("Doctor")

doctorRoute.get("/checkAuth",Authentication,doctorController.checkAuth);


doctorRoute.get("/login", doctorController.login);
doctorRoute.post("/login", doctorController.login);
doctorRoute.post("/signup", doctorController.signup);





module.exports = doctorRoute
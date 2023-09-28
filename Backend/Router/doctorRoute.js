const express = require("express")
const doctorRoute = express()


doctorRoute.use(express.json())
doctorRoute.use(express.urlencoded({extended:true}))

module.exports = doctorRoute
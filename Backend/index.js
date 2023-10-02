const express       = require("express");
const cors          = require("cors");
// const cookieparser                                                              = require('cookie-parser');
const jwt           = require("jsonwebtoken");
const connectToMongoDB = require("./Config/mongodbServer");
const userRoute     = require('./Router/userRoute.js');
const adminRoute    = require("./Router/adminRoute.js")
const doctorRoute   = require("./Router/doctorRoute.js");
const app           = express()
                      require('dotenv').config();
const port          = process.env.PORT 
 

app.use(cors())
app.use(express.json())
connectToMongoDB()

app.use('/', userRoute)
app.use('/doctor', doctorRoute)
app.use('/admin', adminRoute)



app.listen(port,()=>console.log("Backend Server is Running"))
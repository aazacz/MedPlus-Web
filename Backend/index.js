const express       = require("express");
const cors          = require("cors");
const cookieparser  = require('cookie-parser');
const jwt           = require("jsonwebtoken");
const mongoDBConnect= require("../backend/config/mongooseConnect.js");
const userRoute     = require('./router/userRoute.js');
const adminRoute    = require("./router/adminRoute.js");
const doctorRoute    = require("./router/doctorRoute.js");
const app           = express()
require('dotenv').config();
const port          = process.env.PORT 





app.use(cors())
app.use(cookieparser())
app.use(express.json())

mongoDBConnect()

app.use('/', userRoute)
app.use('/doctor', userRoute)
app.use('/admin', adminRoute)



app.listen(port,()=>console.log("Server is Running"))
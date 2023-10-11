const express       = require("express");

const jwt           = require("jsonwebtoken");
const connectToMongoDB = require("./Config/mongodbServer");
const userRoute     = require('./Router/userRoute.js');
const adminRoute    = require("./Router/adminRoute.js")
const doctorRoute   = require("./Router/doctorRoute.js");
const app           = express()
                      require('dotenv').config();
const port          = process.env.PORT 
const cors = require('cors');

// const corsOptions = {
//     origin: 'http://localhost:5173.',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Enable cookies and credentials
//   };
  
//   app.use(cors(corsOptions));
       
app.use(cors())
app.use(express.json())
connectToMongoDB()

app.use('/', userRoute)
app.use('/doctor', doctorRoute)
app.use('/admin', adminRoute)
   


app.listen(port,()=>console.log("Backend Server is Running"))
const express   = require("express")
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const User      = require('../Model/userDb.js')
const { jwtsecret } = process.env;



const passwordHash = async (password) => {
    try {
      const passwordHash = await bcrypt.hash(password, 5);
      console.log(passwordHash);
      return passwordHash;
    } catch (error) {
      console.log(error.message);
    }
  };

  
  const login = async (req, res) => {

    try {
      console.log(req.body.email);
      const tokenProducer = req.body.email
  
      console.log("1")
      const user = await User.findOne({  email: req.body.email,isAdmin: 1}).catch((err) => {
        console.log("Error in finding" + err);
      })

      console.log("finded user" + user);
  
      if (!user) {  //if user not found in DB
        return res.json({ message: "Email or password doesnt match" })
      }

      if(user.isAdmin===1){

         
          // , { expiresIn: "1 hour" }
          const token = jwt.sign({ _id: tokenProducer }, jwtsecret)
          console.log(token);
    
          const userVer = jwt.verify(token, jwtsecret)
          console.log(userVer);
    console.log("password verified");
          res.json({
            status: "success",
            name: user.name,
            token,
            login: true,
            email: tokenProducer
          })
        
      }
  
  
  
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", error: "Server error" });
    }
  
  }


  const getUser = async (req,res)=>{
    try {
    
      const encodedValue = req.query.data;
      console.log("encodedValue");
      console.log(encodedValue);
      const user = await User.find().catch((err) => {
      console.log("Error in finding" + err);
      })
     console.log(user);
    
     
    res.json({
      status: "success",
     user:user
     })
    
    
    } catch (error) {
      console.log(error);
    }
     
    }


  module.exports = {

    login,
    // signup,
    getUser,
    // updateProfile,
    // generateotp,
    // otplogin
  }
  
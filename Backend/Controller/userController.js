const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Model/userDb.js')
const Doctor = require('../Model/doctorDb')


const passwordHash = async (password) => {
    try {
      const passwordHash = await bcrypt.hash(password, 5);
      console.log(passwordHash);
      return passwordHash;
    } catch (error) {
      console.log(error.message);
    }
  };

  const verifyToken=(token)=>{
    const userVer = jwt.verify(token,"mynameisabhilashabinzachariah")
    console.log(userVer);
}



const login = async(req,res)=>{
    
    try{
        console.log(req.body.email);
        const tokenProducer = req.body.email
        
        console.log("1")
        const user= await User.findOne({email:req.body.email})
        console.log("finded user" + user);

        const token = jwt.sign({_id:tokenProducer},"mynameisabhilashabinzachariah",{expiresIn:"1 hour"})
        console.log(token);

        const userVer = jwt.verify(token,"mynameisabhilashabinzachariah")
        console.log(userVer);

        res.json({status:"success",
                  name  :user.name,
                  token,
                  login :true,
                  email :tokenProducer})

        
    }
    catch(error){
        console.log(error);
        res.status(500).json({ status: "error", error: "Server error" });
    }

}

const signup = async (req, res) => {
    try {
      const { email, name, password } = req.body;
      // const passwordbcrypt = await  passwordHash(password);
       
      console.log(email,name,password);
    
      const newUser = new User({
              email: email,
              name: name ,
              password: password
      })
  
    const newData =   await newUser.save();
    console.log(newData);
  
      // res.json({ status: "success", message: "User registered successfully" });
    } catch (error) {
      console.error("Error during user registration:", error.message);
      res.status(500).json({ status: "error", message: "Internal server error" });
    }
  };
  


module.exports = {

    login,
    signup  
}

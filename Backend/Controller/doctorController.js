const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Doctor = require('../Model/doctorDb')
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
        console.log("");
        console.log(req.body.email);
        const tokenProducer = req.body.email

        if (!req.body.email || !req.body.password) {
        return res.json({ message: "Enter Email And Password" });
}
        console.log("1")
        const user = await Doctor.findOne({ email: req.body.email })
            .catch((err) => {
            return res.json({ message: "Email doesnt match" })
               })
        

        if (!user) {  //if user not found in DB
            return res.json({ message: "Email doesnt match" })
        }
       
        const passwordmatch = await bcrypt.compare(req.body.password, user.password)
        console.log("2")
        if (passwordmatch) {
            const token = jwt.sign({ _id: user._id }, jwtsecret)
            const userVer = jwt.verify(token, jwtsecret)
            console.log("3")
            res.json({
                status: "success",
                name: user.name,
                token,
                login: true,
                email: tokenProducer
            })
        }
        else {
         console.log("4")

         return res.json({
                status: "failed",
                message: "Password is incorrect"
            });
        }

    
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Server error" });
    }

}










const signup = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const passwordbcrypt = await passwordHash(password);

        console.log(email, name, password);

        const newDoctor = new Doctor({
            email: email,
            name: name,
            password: passwordbcrypt
        })

        const newData = await newDoctor.save();
        console.log(newData);

        res.json({ status: "success", message: "User registered successfully" });
    } catch (error) {
        console.error("Error during user registration:", error.message);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};





module.exports = {

    login,
    signup
}

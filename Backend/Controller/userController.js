const express   = require("express")
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const User      = require('../Model/userDb.js')
const { jwtsecret } = process.env;
const otpGenerator      = require('otp-generator')
const nodemailer        = require('nodemailer')
const Otp               = require('../Model/otpdb.js')

const passwordHash = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 5);
    console.log(passwordHash);
    return passwordHash;
  } catch (error) {
    console.log(error.message);
  }
};

const verifyToken = (token) => {
  const userVer = jwt.verify(token, "mynameisabhilashabinzachariah")
  console.log(userVer);
}



const login = async (req, res) => {

  try {
    console.log(req.body.email);
    const tokenProducer = req.body.email

    console.log("1")
    const user = await User.findOne({ email: req.body.email }).catch((err) => {
      console.log("Error in finding" + err);
    })
    console.log("finded user" + user);

    if (!user) {  //if user not found in DB
      return res.json({ message: "Email or password doesnt match" })
    }

    const passwordmatch = await bcrypt.compare(req.body.password, user.password)//compare the password

    if (passwordmatch) {
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

const signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const passwordbcrypt = await  passwordHash(password);

    console.log(email, name, password);

    const newUser = new User({
      email: email,
      name: name,
      password: passwordbcrypt
    })

    const newData = await newUser.save();
    console.log(newData);

    // res.json({ status: "success", message: "User registered successfully" });
  } catch (error) {
    console.error("Error during user registration:", error.message);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};



const getUser = async (req,res)=>{
try {

  const encodedValue = req.query.data;
  console.log("encodedValue");
  console.log(encodedValue);
  const user = await User.findOne({ email: encodedValue }).catch((err) => {
  console.log("Error in finding" + err);
  })
console.log(user);

 
res.json({
  status: "success",
  name: user?.name,
  email: user?.email,
  houseName: user?.houseName,
  city: user?.city,
  district: user?.district,
  state: user?.state,
  pincode: user?.pincode,
  mobile: user?.mobile,
  phone: user?.phone,
  image: user?.image,
 })


} catch (error) {
  console.log(error);
}
 
}


const updateProfile = async(req,res)=>{

try {
  if(req.file){
        console.log(req.file.filename);
        console.log(req.body.name);
        console.log(req.body.email);
      
        const updatedata = {
          name: req.body.name,
          email: req.body.email,
          houseName: req.body.houseName,
          city: req.body.city,
          district: req.body.district,
          state: req.body.state,
          pincode: req.body.pincode,
          mobile: req.body.mobile,
          phone: req.body.phone,
          image: req.file.filename,
        };


        const userdata = await User.updateOne({ email: req.body.email }, { $set: updatedata })

        return res.json({
          Status: "success",
          name: req.body.name,
          email: req.body.email,
          houseName: req.body.houseName,
          city: req.body.city,
          district: req.body.district,
          state: req.body.state,
          pincode: req.body.pincode,
          mobile: req.body.mobile,
          phone: req.body.phone,
          image: req.file.filename
          });
        
        }
        else{
      
          console.log(req.body.name);
          console.log(req.body.email);
        
          const updatedata = {
            name: req.body.name,
            email: req.body.email,
            houseName: req.body.houseName,
            city: req.body.city,
            district: req.body.district,
            state: req.body.state,
            pincode: req.body.pincode,
            mobile: req.body.mobile,
            phone: req.body.phone,

          };

          const userdata = await User.updateOne({ email: req.body.email }, { $set: updatedata })
          return res.json({
            Status: "success",
            name: req.body.name,
            email: req.body.email,
            houseName: req.body.houseName,
            city: req.body.city,
            district: req.body.district,
            state: req.body.state,
            pincode: req.body.pincode,
            mobile: req.body.mobile,
            phone: req.body.phone,
            image: userdata.image
            });


        }

} catch (error) {
  console.log(error);
  
}
}




const generateotp = async (req,res)=>{
  try {

    const OTP = otpGenerator.generate(4, {
      digits:             true,
      alphabets:          false,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars:       false,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "abhilashabinz@gmail.com",
        pass: "otjhcsnvnhknygrh",
    },
});

var mailOptions = {
  from:   "abhilashabinz@gmail.com",
  to:     req.body.email,
  subject:"OTP VERIFICATION",
  text:   "PLEASE ENTER THE OTP FOR LOGIN " + OTP,
};
transporter.sendMail(mailOptions, function (error, info) { });
console.log(OTP);

const otp    = new Otp({ email: req.body.email, otp: OTP });
const salt   = await bcrypt.genSalt(10);
otp.otp      = await bcrypt.hash(otp.otp, salt);
const result = await otp.save();


return res.json({status:"success",OTP:OTP})
} catch (error) {
    console.log(error.message)

}
}

const otplogin= async(req,res)=>{

try {
   const LoginDetail = req.body;
  console.log(LoginDetail.email);
  const tokenProducer = LoginDetail.email

  console.log("1")
  const emailObject = { email: `${LoginDetail.email}` };

  const user = await User.findOne(emailObject).catch((err) => {
    console.log("Error in finding" + err);
  })
  console.log("finded user" + user);

  if (!user) {  //if user not found in DB
    return res.json({ message: "Email or password doesnt match" })
  }
    const userOtp  =   await Otp.findOne({email:LoginDetail.email}).catch((error)=>{

      console.log("error in the otp finding"+error);
      return res.json({message:"OTP Expired"})
    })
 
  if (user) {
    console.log("user matched")
    const otpmatch         = await bcrypt.compare(LoginDetail.otp, userOtp.otp)
    console.log(otpmatch);
    if (otpmatch) {
      console.log("OTP Matched")
   
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
    } else { 
      res.json({
        status: "failed",
        name: "user.name",
        token:"",
        login: false,
        email: ""
      })
            
    } 

}


 
} catch (error) {
  console.log(error);
  console.log(error.message);
}



}


module.exports = {

  login,
  signup,
  getUser,
  updateProfile,
  generateotp,
  otplogin
}

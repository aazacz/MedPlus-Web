const express           = require('express');
const userRoute         = express();
const userController    = require("../Controller/userController")
const multer            = require('multer')
const path          = require('path')
const authentication = require('../middleware/authentication')
const auth              = require('../middleware/authentication') 
const compression = require('compression');


userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true }))
userRoute.use(express.static("public"))   
userRoute.use(compression())   


const Authentication = auth("User")


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"../Frontend/public")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage

})




userRoute.get("/checkAuth",Authentication,userController.checkAuth);

userRoute.post("/login", userController.login);
userRoute.post("/signup", userController.signup);
userRoute.post("/updateProfile",upload.single('image'), userController.updateProfile);
userRoute.get("/getUser", userController.getUser);
userRoute.post("/generateotp", userController.generateotp);
userRoute.post("/otplogin", userController.otplogin);
userRoute.post("/createConsultation", userController.createConsultation);
userRoute.post("/checkEmailDuplicates", userController.checkEmailDuplicates);

  

module.exports = userRoute
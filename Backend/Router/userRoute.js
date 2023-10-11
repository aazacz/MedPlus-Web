const express           = require('express');
const userRoute         = express();
const userController    = require("../Controller/userController")
const multer            = require('multer')
const path          = require('path')

userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true }))
userRoute.use(express.static("public"))   





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







userRoute.post("/login", userController.login);
userRoute.post("/signup", userController.signup);
userRoute.post("/updateProfile",upload.single('image'), userController.updateProfile);
userRoute.get("/getUser", userController.getUser);
userRoute.post("/generateotp", userController.generateotp);
userRoute.post("/otplogin", userController.otplogin);

  

module.exports = userRoute
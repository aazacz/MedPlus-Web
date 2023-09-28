const express           = require('express');
const userRoute         = express();
const userController    = require("../Controller/userController")

userRoute.use(express.json());
userRoute.use(express.urlencoded({ extended: true }))

userRoute.post("/login", userController.login);
userRoute.post("/signup", userController.signup);

  

module.exports = userRoute
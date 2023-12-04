import React from "react";
import axios from "axios";


export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };


  export const duplicateEmail = async(email)=>{

    return new Promise((resolve, reject) => {
      // Your logic to check for duplicate email
      // Example: Assuming you have an API call
       axios.post("http://localhost:6002/checkEmailDuplicates",{email:email})
        .then(data => resolve(data.data.status))
        .catch(error => reject(error));
    });

}  
  
  export const validatePasswordLength = (password) => {
    return password.length >= 6;
  };
  
  export const validatePhone = (phone) => {
    return phone.length === 10;
  };
  
  export const validatePincode = (pincode) => {
    return pincode.length === 6;
  };
  

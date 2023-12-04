import React, { useState, useEffect } from 'react'
import group8img from "../../../assets/group8.png"
import LoginPhoto from "../../../assets/photoLoginSession.png"
import logo from "../../../assets/MED+Logo.png"
import axios from "axios"
import { FcApproval } from "react-icons/fc";
import { Link } from 'react-router-dom'
import { validateEmail,validatePasswordLength,duplicateEmail } from '../../Utils/Signup_Validation'


function SignupSectionUser() {

    const [Error,SetError] = useState({email:"",password:"", })
    const [EmailError,SetEmailError] = useState(false)
    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
    });
   

    const checkEmail = async () => {
        SetEmailError("");
        try {
          if (!validateEmail(signup.email)) {
            console.log("function 1 ");
            SetError({ ...Error, email: "Invalid Email Format, Check Again" });
            SetEmailError(false);
            return;
          } else {
            
            const status = await duplicateEmail(signup.email);
            console.log("isDuplicate   :"+status);
            if (!status) {
              console.log("function 2 ");
              console.log(signup.email);
              SetError({ ...Error, email: "Email already Exist, Try another Email ID" });
              SetEmailError(false);
              return;
            } else {
              console.log("else case");
              SetEmailError(true);
            }
          }
        } catch (error) {
          console.log("Error finding email:", error);
          // Handle errors appropriately
        }
      };



    const handleSubmit = async (event) => {
        event.preventDefault()

        await axios.post("http://localhost:6002/signup", signup).then((res) => {
            console.log("success");
            console.log(res);
        });
    };





    return (



        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">



            <div className=' h-[475px] bg-lightgreen2 rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex md:w-[800px] md:h-[525px] 
                            lg:flex'>
                <div className=' h-[460px]   bg-white 
                            md:flex md:w-[800px]  md:h-[510px]
                            lg:flex
                    '>
                    {/* Login Sectin Left side */}
                    <div className='w-full h-full hidden
                                md:w-1/2 display-block md:px-7 md:py-9 md:flex  md:flex-col  md:items-center 
                                lg:w-1/2 lg:px-7 lg:py-9 lg:flex  lg:flex-col  lg:items-center' >
                        <img src={group8img} alt="" />
                        <img className='w-[250px]' src={LoginPhoto} alt="" />
                    </div>

                    {/* Login Sectin right side */}
                    <div className='w-full  h-full  flex items-center 
                                    md:w-1/2 md:flex md:items-center
                                    lg:w-1/2 '>
                        <form action="" method="post" className=' md:w-full h-3/4   md:border-l-[1px] flex flex-col  items-center 
                                        md:px-7'>

                            <img src={logo} className=' w-[70px] h-[30px] ' alt="" />
                            <h1 className='text-[17px] mt-[18px]'>Welcome user! Create your Account</h1>

                            <div className='flex flex-row items-start'>  
                             <input className=' my-2  w-[230px] md:w-[330px] h-[50px] border-b-[1px] focus:outline-none' 
                                    placeholder='Email '
                                    type="email"
                                    name='email'
                                    onBlur={checkEmail}
                                    onChange={(e) => {
                                         setSignup({ ...signup, email: e.target.value })
                                             }} /> 
                            
                             <FcApproval className={` w-5  h-5 ${EmailError? "":"hidden"} `} />
                            </div>

                            <div className='flex items-center'>  
                             <input className=' my-2 w-[230px] md:w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Name' type="text" name='name' onChange={(e) => {
                                setSignup({ ...signup, name: e.target.value })
                            }} /> <FcApproval className=' w-5 h-5 ' />
                            </div>

                            <div className='flex items-center'>
                                <input className=' my-2 w-[230px] md:w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="password" name="password" onChange={(e) => {
                                    setSignup({ ...signup, password: e.target.value });
                                }} />  <FcApproval className='  w-5 h-5 ' /> </div>

                            <div className='flex items-center'> 
                                <input className=' mt-2 w-[230px] md:w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Retype Password' type="password" /> 
                                 <FcApproval className=' w-5 h-5 ' />  </div>

                            <div className='mt-1 flex h-[50px] w-full  flex-row items-center justify-between
                                  md:flex md:flex-row md:h-[50px] md:w-full  md:items-center md:justify-between'>


                            </div>
                            <div className='flex h-[50px] w-full mt-6 items-center justify-center '>


                                <button className='rounded-[4px] ml-4 text-lightgreen w-[120px] border-2 border-lightgreen h-8' onClick={handleSubmit}> SIGNUP</button>

                            </div>

                            <div className='md:mt-3'>
                                <span className='text-[13px]'> Already have an account  </span>
                                <Link to="/login">
                                <button className='rounded-[4px] w-[100px] mt-3 text-white md:w-[120px] bg-lightgreen2 h-6' > LOGIN</button>
                                </Link>
                            </div>

                        </form>
                    </div>

                </div>
  
            </div>
        </section>
    )
}

export default SignupSectionUser
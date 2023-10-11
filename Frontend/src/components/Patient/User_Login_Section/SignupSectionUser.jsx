import React, { useState, useEffect } from 'react'
import group8img from "../../../assets/group8.png"
import LoginPhoto from "../../../assets/photoLoginSession.png"
import logo from "../../../assets/MED+Logo.png"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../../Redux/userSlice"


function SignupSectionUser() {

    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
      });
    console.log(signup);


    const handleSubmit =async (event) => {
        event.preventDefault()
        await axios.post("http://localhost:6002/signup",signup).then((res) => {
           console.log("success");
           console.log(res);
         });
       };
    




    return (
        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">

            <div className=' h-[475px] bg-lightgreen2 rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex md:w-[800px] md:h-[485px] 
                            lg:flex'>
                <div className=' h-[460px]   bg-white 
                            md:flex md:w-[800px]  md:h-[470px]
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
                            <h1 className='text-[17px] mt-[18px]'>Welcome user!<br /> Create your Account</h1>

                            <input className=' my-4 w-[230px] md:w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Name' type="text" name='name'  onChange={(e) => {
                                     setSignup({ ...signup, name: e.target.value })              }}/>
                            <input className=' my-4 w-[230px] md:w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Email' type="email" name='email'  onChange={(e) => {
                                     setSignup({ ...signup, email: e.target.value });            }}/>
                            <input className=' my-4 w-[230px] md:w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="password" name="password"  onChange={(e) => {
                                     setSignup({ ...signup, password: e.target.value });         }}/>
                            <input className=' mt-4 w-[230px] md:w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Retype Password' type="password" />

                            {/* <span className='md:mt-[-10px] text-sm' href="http://">Or Login with OTP</span> */}


                            {/* <div className='w-full h-[40px] flex flex-row items-center justify-between
                                            md:flex  md:h-[50px] md:w-full md:items-center md:justify-between'>

                                    <input className='my-3 md:w-[150px] h-[30px] border-b-[1px] focus:outline-none ' placeholder='Mobile' type="text" />

                                    <Link to='verifyotp'>
                                        <button className=' rounded-md text-white w-[110px] bg-lightgreen2 h-7'  > Send OTP</button>
                                    </Link>

                                </div> */}

                            <div className='mt-1 flex h-[50px] w-full  flex-row items-center justify-between
                                  md:flex md:flex-row md:h-[50px] md:w-full  md:items-center md:justify-between'>
                                {/* <div className='flex '>
                                        <input type="checkbox" name="" id="" />
                                        <p className='ml-1'>Remenber Me</p>
                                    </div> */}

                                {/* <a className='block text-[14px]' href="http://">forgotten Password</a> */}

                            </div>
                            <div className='flex h-[50px] w-full mt-6 items-center justify-center '>


                                <button className='rounded-[4px] ml-4 text-lightgreen w-[120px] border-2 border-lightgreen h-8'   onClick={handleSubmit}> SIGNUP</button>

                            </div>

                            <div className='md:mt-3'>
                                <span className='text-[13px]'> Already have an account  </span>
                                <button className='rounded-[4px] w-[100px] mt-3 text-white md:w-[120px] bg-lightgreen2 h-6' type="submit" > LOGIN</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default SignupSectionUser
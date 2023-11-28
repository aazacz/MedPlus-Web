import React, { useState, useEffect } from 'react'
import group8img from "../../../assets/group8.png"
import LoginPhoto from "../../../assets/photoLoginSession.png"
import logo from "../../../assets/MED+Logo.png"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAdmin } from "../../../Redux/adminSlice"
import { useSignIn } from 'react-auth-kit'

function LoginSectionAdmin() {

    const signIn = useSignIn()
    const [LoginDetail, SetLoginDetail] = useState({ email: "", password: "" });
    const dispatch = useDispatch()
    const navigate = useNavigate()


   


    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log("LoginDetails are " + LoginDetail)

        axios.post("http://localhost:6002/admin/login", LoginDetail)
        .then((res) => {
          console.log(res);
          console.log(res.data);
          console.log(res.data.token);
      
          if (res.data.token) {
            signIn({
              token: res.data.token,
              expiresIn: 3600,
              tokenType: "Bearer",
              authState: { email: LoginDetail.email }
            });                                                                                                                               
            console.log("signIn function executed");
          }
      
          return res; 
        })
        .then((res) => {
          // Check if the token exists in the response
          if (res && res.data && res.data.token) {
            dispatch(
              loginAdmin({
                name: res.data.name,
                email: res.data.email,
                login: true,
                token: res.data.token
              })
            );
            navigate("/adminDashboard")
          }
        })
        .catch(err => console.log(err));
      

    }




    return (
        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">

            <div className=' h-[445px] bg-midnight rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex md:w-[800px] 
                            lg:flex'>
                <div className=' h-[430px]   bg-white
                            md:flex md:w-[800px] 
                            lg:flex
                    '>
                    {/* Login Sectin Left side */}
                    <div className='w-full h-full hidden
                                md:hidden  md:py-9 md:flex-col  md:items-center  
                                lg:py-9  lg:flex-col  lg:items-center' >
                                                        <img src={group8img} alt="" />
                        <img className='w-[250px]' src={LoginPhoto} alt="" />
                    </div>

                    {/* Login Sectin right side */}
                    <div className='mx-3 w-full h-full  flex items-center
                                   
                                    '>
                        <form className=' md:w-full h-3/4    flex flex-col  items-center 
                                        md:px-7' action="" onSubmit={HandleSubmit}>

                            <img src={logo} className=' w-[70px] h-[30px] ' alt="" />
                            <h1 className='text-[17px] mt-[18px]'>Welcome user! please Login to your Account</h1>

                            <input className=' mt-6 md:my-0 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Email' type="email" onChange={(e) => { SetLoginDetail({ ...LoginDetail, email: e.target.value }); }} />
                            <input className=' my-6 md:mt-5 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="password" onChange={(e) => { SetLoginDetail({ ...LoginDetail, password: e.target.value }); }} />

                            <span className='md:mt-[-10px] text-sm' href="http://">Or Login with OTP</span>


                            <div className='w-full h-[40px] flex flex-row items-center justify-between
                                            md:flex  md:h-[50px] md:w-full md:items-center md:justify-between'>

                               
                           
                            

                            </div>

                            <div className='mt-1 flex h-[50px] w-full  flex-row items-center justify-between
                                  md:flex md:flex-row md:h-[50px] md:w-full  md:items-center md:justify-center'>
                                <div className='flex  '>
                                    <input type="checkbox" name="" id="" />
                                    <p className='ml-1'>Remenber Me</p>
                                </div>

                                <a className='block ml-5 text-[14px]' href="http://">forgotten Password</a>

                            </div>
                            <div className='flex h-[50px] w-full mt-6 items-center justify-center '>

                                <button className='rounded-[4px] text-white w-[120px] bg-lightgreen2 h-8' type="submit"  > LOGIN</button>
                                
                                <button className='rounded-[4px] ml-4 text-lightgreen w-[120px] border-2 border-lightgreen h-8' onClick={()=>navigate("/signup")} > SIGNUP</button>
                               
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default LoginSectionAdmin
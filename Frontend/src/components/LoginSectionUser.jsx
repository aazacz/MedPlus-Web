import React from 'react'
import group8img from "../assets/group8.png"
import LoginPhoto from "../assets/photoLoginSession.png"
import logo from "../assets/MED+Logo.png"

function LoginSectionUser() {
    return (
        <section className="     h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">

            <div className=' h-[415px] bg-lightgreen2 rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex md:w-[800px] 
                            lg:flex'>
                <div className=' h-[400px]   bg-white
                            md:flex md:w-[800px] 
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
                    <div className='w-full h-full  flex items-center
                                    md:w-1/2 
                                    lg:w-1/2 '>

                        <div className='px-4 md:w-full h-3/4 px-7  md:border-l-[1px] flex flex-col  items-center 
                                        md:px-7' >
                            <img src={logo} className=' w-[70px] h-[30px] ' alt="" />
                            <h1 className='text-[17px] mt-[18px]'>Welcome user! please Login to your Account</h1>

                            <input className='w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Username' type="text" />
                            <input className='my-3 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="text" />

                            <a className='mt-2' href="http://">Or Login with OTP</a>


                            <div className='w-full h-[40px] flex flex-row
                            md:flex  md:h-[50px] md:w-full md:items-center md:justify-between'>
                                
                                <input className='my-3 w-[150px] h-[30px] border-b-[1px] focus:outline-none ' placeholder='Mobile' type="text" />

                                <button  className=' rounded-md text-white w-[110px] bg-lightgreen2 h-7' > Send OTP</button>
                            </div>

                            <div className='flex h-[50px]   flex-col items-center justify-between
                            md:flex md:h-[50px] md:w-full  md:items-center md:justify-between'>
                                <div className='flex items'>
                                    <input type="checkbox" name="" id="" />
                                    <p className='ml-1'>Remenber Me</p>
                                </div>

                                <a className='block text-[10px]' href="http://">forgotten Password</a>

                            </div>
                            <div className='flex h-[50px] w-full mt-2 items-center justify-center '>
                               
                            <button  className='rounded-[4px] text-white w-[120px] bg-lightgreen2 h-8' > LOGIN</button>
                            <button  className='rounded-[4px] ml-4 text-lightgreen w-[120px] border-2 border-lightgreen h-8' > SIGNUP</button>

                            </div>

                        </div>



                    </div>
 
                </div>



            </div>



        </section>
    )
}

export default LoginSectionUser
import React, { useState,useEffect } from 'react'
import logo from "../../assets/MED+Logo.png"
import DateAndTime from '../DateAndTime';

const Dashboard_Navbar_Doctor = () => {


    
    return (
        <>
            {/* Navbar starts here   */}
            <div className='md:h-[100px]  w-full  flex justify-between overflow-hidden '>
                
                <nav className=' w-full   md:bg-transparent flex justify-between  px-10 overflow-hidden 
                            md:flex md:items-center md:justify-between  md:w-full  md:px-4  '>

                    <div className='md:flex md:flex-col flex flex-col -space-y-[7px]'>
                        <div className='text-left'>
                            <img className=" w-[68px] md:h-[60px] md:w-auto " src={logo} alt="LOGO" />
                        </div >
                        <span className=' text-[9px]  font-sans   md:text-black lg:text-black flex md:text-base '>Where Healing matters...</span>
                    </div>

                <div><DateAndTime/> </div>                 



                  
                </nav>

            </div>
        </>
    )
}

export default Dashboard_Navbar_Doctor
import React, { useState,useEffect } from 'react'
import logo from "../../assets/MED+Logo.png"
import DateAndTime from '../DateAndTime';

const Dashboard_Navbar_Doctor = () => {
const [count,setcount] = useState(0)
useEffect(()=>{
    setcount(()=>count+1)
console.log(count);
},[])
    function menubar(event) {
        let list = document.querySelector('ul');
        // this is a terneray condition which determines if the button is clicked then the id is changed to the opposite and two new classess are added     
        event.target.id === 'menu' ?

            (event.target.id = "close",
                list.classList.add('top-[82px]'),
                list.classList.add('opacity-100'))
            :
            (event.target.id = "menu",
                list.classList.remove('top-[80px]'),
                list.classList.remove('opacity-100')
            )
    }

    return (
        <>
            {/* Navbar starts here   */}
            <div className='md:h-[105px] md:mx-12 '>
                <nav className='p-5 w-full  bg-red md:bg-transparent flex justify-between  px-10 overflow-x-hidden 
                            md:flex md:items-center md:justify-between  md:w-full  md:px-4  '>

                    <div className='md:flex md:flex-col flex flex-col -space-y-[7px]'>
                        <div className='text-left'>
                            <img className=" w-[68px] md:h-[60px] md:w-auto " src={logo} alt="LOGO" />
                        </div >
                        <span className=' text-[9px]  font-sans  text-white md:text-black lg:text-black flex md:text-base '>Where Healing matters...</span>
                    </div>

                <div><DateAndTime/> </div>                 



                  
                </nav>

            </div>
        </>
    )
}

export default Dashboard_Navbar_Doctor
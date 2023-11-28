import React from 'react'
import logo from "../assets/MED+Logo.png"

const Footer = () => {
    return (
        <>
            <div className="w-full h-[250px] mt-[40px] bg-lightgreen flex flex-row">
                <div className="flex flex-col w-1/4 h-ful pl-6">
                    <img className=" mt-4  w-[48px] md:w-[80px]" src={logo} alt="LOGO" />
                    <h5 className='mt-4 text-orange-700 text-left text-base font-semibold'>Get A Lots of informations from us </h5>
                    <h5 className='mt-4 text-stone-950 text-left text-2xl font-semibold'>Subscribe to our NewsLetter </h5>
                    
                    <input className='mt-4 outline-none rounded-md h-9 placeholder:italic placeholder:pl-5 placeholder:text-sm ' type="search" name="" id="" placeholder='Enter Your Email ' />
                    <button className='mt-4 w-[312px] h-[40px] rounded-md bg-slate-800' type="submit"> Submit</button>
                </div>
                <div className="w-1/2 h-full bg-red-500">Section 2</div>
                <div className="w-1/4 h-full bg-yellow-500">Section 3</div>
            </div>


        </>
    )
}

export default Footer
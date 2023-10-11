import React from 'react'
import logo from "../../assets/MED+Logo.png"
import { useNavigate } from 'react-router-dom';

const NavbarAdmin= () => {

const navigate = useNavigate()
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
            <div className='md:h-[145px]   bg-midnight '>
                <nav className='p-5 w-full bg-midnight md:bg-transparent flex justify-between  px-10 overflow-x-hidden 
                            md:flex md:items-center md:justify-center  md:w-full  md:px-4  '>

                    <div className='md:flex md:flex-col flex flex-col  md:items-center -space-y-[7px]'>
                        <div className='text-left'>
                            <img className=" w-[68px] md:h-[60px] md:w-auto bg-white " src={logo} alt="LOGO" />
                        </div >
                        <span className=' text-[9px]  font-sans  text-white md:text-white lg:text-white flex md:text-base '>Where Healing matters...</span>
                    </div>

          

                    <ul className='md:h-12 flex  flex-col text-white  bg-metal  z-[99]  absolute  left-0  w-full  opacity-0   top-[-400px]   transition md:transition-non ease-in  duration-500 
                      md:flex   md:flex-row   
                    md:align-middle  md:z-auto md:top-[100px] md:opacity-100  md:justify-end
                    
                          '>

                    
                        <li className='mx-4 cursor-pointer text-left my-2 md:my-auto '> <a href="#" className="text-lg hover:text-red duration-300">ADMIN</a></li>

                      

                    </ul>



                    <span className='text-3xl cursor-pointer block md:hidden '>
                        <a className='text-4xl text-white ' id='menu' onClick={event => menubar(event)} href="#">&#8801; </a>
                    </span>
                </nav>

            </div>
        </>
    )
}

export default NavbarAdmin
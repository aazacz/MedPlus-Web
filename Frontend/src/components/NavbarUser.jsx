import React from 'react'
import logo from "../assets/MED+Logo.png"

const NavbarUser = () => {


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
            <div className='md:h-[145px] md:mx-12 '>
                <nav className='p-5 w-full bg-lightgreen md:bg-transparent flex justify-between  px-10 overflow-x-hidden 
                            md:flex md:items-center md:justify-between  md:w-full  md:px-4  '>

                    <div className='md:flex md:flex-col flex flex-col -space-y-[7px]'>
                        <div className='text-left'>
                            <img className=" w-[68px] md:h-[60px] md:w-auto " src={logo} alt="LOGO" />
                        </div >
                        <span className=' text-[9px]  font-sans  text-white md:text-black lg:text-black flex md:text-base '>Where Healing matters...</span>
                    </div>

                    <div className=' md:w-[250px] md:h-[40px]  md:flex md:justify-end md:items-center md:border-2 md:rounded md:border-lightgreen group '>
                        <input type="search" className='md:w-[150px] md:h-[40px] outline-none bg-transparent ' placeholder='' />
                        <i className="hidden md:block fa-solid fa-magnifying-glass hover:text-lg hover:duration-500"></i>
                        <p className='hidden md:block px-2 text-lg hover:text-xl  hover:duration-500'>Search </p>
                    </div>


                    <ul className='md:h-12 flex  flex-col text-white  bg-lightgreen  z-[99]  absolute  left-0  w-full  opacity-0   top-[-400px]   transition md:transition-non ease-in  duration-500 
                      md:flex   md:flex-row   
                    md:align-middle  md:z-auto md:top-[100px] md:opacity-100  md:justify-end
                    
                          '>

                        <li className='mx-4 cursor-pointer text-left my-2 md:my-auto  min-[320px]:hover-bg-lightgreen2 '> <a href="#" className="text-lg hover:text-red duration-300">HOME </a></li>
                        <li className='mx-4 cursor-pointer text-left my-2 md:my-auto '> <a href="#" className="text-lg hover:text-red duration-300">ADMIN</a></li>
                        <li className='mx-4 cursor-pointer text-left my-2 md:my-auto '> <a href="#" className="text-lg hover:text-red duration-300">ABOUT</a></li>
                        <li className='mx-4 cursor-pointer text-left my-2 md:my-auto '> <button className='hidden md:block bg-cyan text-white font-[Arial] px-6 py-2 mx-4 hover:bg-red rounded duration-200'> Login </button></li>

                    </ul>



                    <span className='text-3xl cursor-pointer block md:hidden '>
                        <a className='text-4xl text-white ' id='menu' onClick={event => menubar(event)} href="#">&#8801; </a>
                    </span>
                </nav>

            </div>
        </>
    )
}

export default NavbarUser
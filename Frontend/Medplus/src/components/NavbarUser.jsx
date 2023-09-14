import React from 'react'




const NavbarUser = () => {


    return (

        <nav className='p-5 bg-white shadow flex justify-between  md:flex md:items-center md:justify-between'>
            <div className='sm:text-center'>
                <span className='text-3xl font-sans text-blue font-extrabold'>MED</span>
                <span className='text-4xl font-sans text-red  font-black '>+</span>
            </div>

            <ul className='md:flex hidden md:items-center z-[-1] md:z-auto md:static absolute'>
               
                <li className='mx-4  cursor-pointer my-6 md:my-0 '> <a href="#" className="text-xl hover:text-red duration-300">HOME</a>     </li>
                <li className='mx-4 cursor-pointer  my-6 md:my-0 '> <a href="#" className="text-xl hover:text-red duration-300">ABOUT</a>    </li>
                <li className='mx-4 cursor-pointer  my-6 md:my-0 '> <a href="#" className="text-xl hover:text-red duration-300">ADMIN</a>    </li>
           
            </ul>
<button className='bg-cyan text-white font-[Arial] px-6 py-2 mx-4 hover:bg-red rounded duration-200'>
Login
</button>

        </nav>

    )
}

export default NavbarUser
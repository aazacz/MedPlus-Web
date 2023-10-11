import React, { useState } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom'; // Import useLocation
import { BiMenu } from "react-icons/bi";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSignOut } from 'react-auth-kit'
import { useSelector } from "react-redux";
// import "./UserDashboardSidebarcss.css"

function DashboardSidebar(props) {
    const {sidebarData} = props

    const size = useSelector(state => state.screen)
    console.log("size" + size);

    const location = useLocation(); // Get the current location using useLocation()
    const [hideitem, setHideItem] = useState(false);
    const menuClass = hideitem ? 'hidden' : '';


    const signOut = useSignOut()

    function menubar(event) {

        let list = document.getElementById('menu');

        const toggleMenu = () => {
            setHideItem(!hideitem);
            return
        };

        event.target.id === 'menu' ?
            (event.target.id = "close",
                toggleMenu(),
                list.classList.remove('w-[250px]'),
                list.classList.add('w-[32px]')
            )
            :
            (event.target.id = "menu",
                toggleMenu(),
                list.classList.remove('w-[32px]'),
                list.classList.add('w-[250px]')
            )
    }


    return (
        <>


            <div className="flex flex-row  flex-1"    >

                <div id='menu' className='relative  h-[calc(2*screen)]  w-[250px]  bg-lightgreen flex  justify-end transition-all md:transition-non ease-in  duration-500'>
                    <ul className='w-[220px] '>
                        <BiMenu className='w-[30px] h-[30px] md:hidden block' id='menu' onClick={event => menubar(event)} />

                        {sidebarData.map((val, key) => (
                            <Link to={`${val.link}`} key={key}>
                                <li className={` my-4 w-full h-[60px] `} >

                                    <div className={`w-full h-full flex flex-row items-center              
                                 ${location.pathname === val.link ? 'bg-white rounded-l-full active' : ''}`}>

                                        <div className={`${location.pathname === val.link ? 'text-blue rounded-l-full active' : 'text-black'} ml-3 `}>{val.icon}</div>
                                        <div data-appear="hidemenu" className={`${menuClass} ${location.pathname === val.link ? 'text-blue rounded-l-full active' : 'text-white'}  ml-[10px] text-sm`}>{val.title}</div>

                                    </div>

                                </li>
                            </Link>


                        ))}
                        <li className={` my-4 w-full h-[60px] `} >

                            <div className={`w-full h-full flex flex-row items-center  `}>

                                <div onClick={() => signOut()} className={`${menuClass} ml-[10px] text-sm cursor-pointer `}><LogoutIcon /></div>
                                <div data-appear="hidemenu" onClick={() => signOut()} className={`${menuClass} text-white  ml-[10px] text-sm cursor-pointer`}>Logout</div>

                            </div>

                        </li>

                    </ul>
                </div>


                <div className='w-full flex-1'>         <Outlet />       </div>
            </div>
        </>
    );
}

export default DashboardSidebar;

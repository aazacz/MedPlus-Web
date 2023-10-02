import React, { useState } from 'react';
import sidebarData from './sidebarData';
import { Link, Outlet, useLocation } from 'react-router-dom'; // Import useLocation
import { BiMenu } from "react-icons/bi";

function UserDashboardSidebar() {

    const location = useLocation(); // Get the current location using useLocation()
    const [hideitem, setHideItem] = useState(false);
    const menuClass = hideitem ? 'hidden' : '';


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

            <div className='h-[555px] w-full flex'>
                <div id='menu' className='w-[250px] h-full bg-lightgreen flex items-center justify-end transition-all md:transition-non ease-in  duration-500'>
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
                    </ul>
                </div>
                <div className='flex-1 h-full'>
                    <Outlet />

                </div>
            </div>
        </>
    );
}

export default UserDashboardSidebar;

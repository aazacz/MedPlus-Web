import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'; // Import useLocation
import { BiMenu } from "react-icons/bi";
import LogoutIcon from '@mui/icons-material/Logout';


function DashboardSidebar(props) {
    const { sidebarData, bg } = props



    const location = useLocation(); // Get the current location using useLocation()
    const [hideitem, setHideItem] = useState(false);
    const menuClass = hideitem ? 'hidden' : '';
    const [toggle, settoggle] = useState(true)

    // const signOut = useSignOut()
    useEffect(() => {
        console.log(toggle);
    }, [toggle])


    return (

        <>
            <div className={`relative mt-28  ${!toggle ? "w-[50px]" : "w-[250px]"}  bg-${bg} flex justify-end transition-all ease-in duration-1000`}>
                <ul className='w-[220px] '>

                    {toggle ? <BiMenu className={` ml-3 text-2xl h-[30px] md:hidden block`} id='menu' onClick={event => settoggle(!toggle)} /> : <BiMenu className={` ml-3 rotate-90 text-2xl h-[30px] md:hidden block`} id='menu' onClick={event => settoggle(!toggle)} />}

                    {sidebarData.map((val, key) => (
                        <Link to={`${val.link}`} key={key}>
                            <li className={` my-4 w-full h-[60px] `} >

                                <div className={` h-full flex flex-row items-center              
                                    ${location.pathname === val.link ? 'bg-white   active' : ''}
                                    ${!toggle ? "w-full rounded-full" : "w-[250px] rounded-l-full"}`}>

                                    <div className={`${location.pathname === val.link ? 'text-blue rounded-l-full active' : 'text-black'} ml-3 `}>{val.icon}</div>
                                    <div data-appear="hidemenu" className={` ${menuClass} ${location.pathname === val.link ? 'text-blue rounded-l-full active' : 'text-white'}  ml-[10px] text-sm `}>{toggle?val.title:""}</div>

                                </div>

                            </li>
                        </Link>


                    ))}
                    <li className={` my-4 w-full h-[60px] `} >

                        <div className={`w-full h-full flex flex-row items-center  `}>

                            <div className={`${menuClass} ml-[10px] text-sm cursor-pointer `}><LogoutIcon /></div>
                            <div data-appear="hidemenu" className={`${menuClass} text-white  ml-[10px] text-sm cursor-pointer transition-all ease-out  duration-5000`}>{toggle ? "Logout" : ""}</div>

                        </div>

                    </li>

                </ul>
            </div>




        </>
    );
}

export default DashboardSidebar;

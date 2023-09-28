import React from 'react'
import sidebarData from './sidebarData'

function UserDashboardSidebar() {
    return (
        <>
            <div className='w-full bg-purple h-screen' >
                <div className='w-[180px] h-full bg-red'>
                    <ul>
                        {sidebarData.map((val, key) => {
                            return (
                                <li className='flex' key={key} onClick={()=>{window.location.pathname = val.link}}>
                                        <div>{val.icon} </div>
                                        <div className='text-sm'>{val.title}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>


        </>
    )
}

export default UserDashboardSidebar
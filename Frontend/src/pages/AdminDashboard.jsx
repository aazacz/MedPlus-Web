import React, { useState, useEffect } from 'react'

import DateAndTime from '../components/DateAndTime'
import Dashboard_Navbar_User from '../components/Patient/Dashboard_Navbar_User'
import DashboardSidebar from '../components/Dashboard_sidebar/DashboardSidebar'
import sidebarData from '../components/Admin/sidebarData'

function AdminDashboard() {
  //checking if the user already logged in using the JWT token


  return (
    <>
<div className="h-screen flex flex-col">
    <div className="mx-5 flex justify-between h-[100px] items-center">
    <Dashboard_Navbar_User />
    </div>
    
    <div className='flex-1'>
    <DashboardSidebar sidebarData={sidebarData} bg={"red"} />
    </div>
    </div>



   
    </>
  )
}


export default AdminDashboard




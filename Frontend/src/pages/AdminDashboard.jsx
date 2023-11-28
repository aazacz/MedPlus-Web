import React, { useState, useEffect } from 'react'

import DateAndTime from '../components/DateAndTime'
import Dashboard_Navbar_User from '../components/Patient/Dashboard_Navbar_User'
import DashboardSidebar from '../components/Dashboard_sidebar/DashboardSidebar'
import sidebarData from '../components/Admin/sidebarData'
import { Outlet } from 'react-router-dom'

function AdminDashboard() {
  //checking if the user already logged in using the JWT token


  return (
    <>

      <div className="absolute z-10 mx-5 flex justify-between h-[100px] items-center">
        <Dashboard_Navbar_User />
      </div>

      <section className=' flex flex-1 ' >

        <DashboardSidebar sidebarData={sidebarData} bg={"red"} />



        <div className='w-full h-screen flex-1 pt-28'>

          <Outlet/>

        </div>
      </section>





    </>
  )
}


export default AdminDashboard




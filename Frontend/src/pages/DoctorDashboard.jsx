import React, { useLayoutEffect } from 'react'
import Dashboard_Navbar_Doctor from '../components/Doctor/Dashboard_Navbar_Doctor'
import DashboardSidebar from '../components/Dashboard_sidebar/DashboardSidebar'
import sidebarData from '../components/Doctor/sidebarData'
import { useNavigate } from 'react-router-dom';
import DoctorDashboardNavbar from '../components/Doctor Dashboard Navbar/DoctorDashboardNavbar'
import { Outlet } from 'react-router-dom';
function DoctorDashboard() {

  return (
    <>

      <div className="h-screen flex flex-col">

        <div className=" h-[100px] items-center overflow-hidden pt-4 md:pt-0 ">    <Dashboard_Navbar_Doctor />   </div>

        <div className='flex md:flex-col'>    <DoctorDashboardNavbar sidebarData={sidebarData}  />        <Outlet/>     </div>
     
      </div>
    </>
          )
}


export default DoctorDashboard




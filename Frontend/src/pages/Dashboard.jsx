import React from 'react'
import { Outlet } from 'react-router-dom'; // Import useLocation
import DateAndTime from '../components/DateAndTime'
import Dashboard_Navbar_User from '../components/Patient/Dashboard_Navbar_User'
import DashboardSidebar from '../components/Dashboard_sidebar/DashboardSidebar'
import sidebarData from '../components/patient/sidebarData'
import { motion } from "framer-motion"





function Dashboard() {

 
  return (
    <>

      <div className="absolute z-10 w-full px-7   flex justify-between h-[100px] items-center">
        <Dashboard_Navbar_User />
        <DateAndTime />
      </div>

<section className='flex flex-1' >

          <DashboardSidebar sidebarData={sidebarData} bg={"lightgreen"} />
        

        <div className='w-full h-screen flex-1 pt-28'>
    
       <Outlet />
     


   

        </div>
      
 </section>
      </>
  );
}



export default Dashboard




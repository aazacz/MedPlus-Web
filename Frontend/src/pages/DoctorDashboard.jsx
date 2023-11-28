import React, { useLayoutEffect } from 'react'
import Dashboard_Navbar_Doctor from '../components/Doctor/Dashboard_Navbar_Doctor'
import DashboardSidebar from '../components/Dashboard_sidebar/DashboardSidebar'
import sidebarData from '../components/Doctor/sidebarData'

import { useNavigate } from 'react-router-dom';

function DoctorDashboard() {




  return (
    <>        
        
<div className="h-screen flex flex-col">
    <div className="mx-5 flex justify-between h-[100px] items-center">
     <Dashboard_Navbar_Doctor/>
    </div>
    
    <div className='flex-1'>
    <DashboardSidebar sidebarData={sidebarData} bg={"blue"}/>
    </div>
    </div>
    </>
  )
}


export default DoctorDashboard




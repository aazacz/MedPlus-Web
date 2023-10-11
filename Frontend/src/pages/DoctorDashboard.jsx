import React from 'react'
import Dashboard_Navbar_Doctor from '../components/Doctor/Dashboard_Navbar_Doctor'
import DashboardSidebar from '../components/Dashboard_sidebar/DashboardSidebar'
import sidebarData from '../components/Doctor/sidebarData'

function AdminDashboard() {

  
  

  return (
    <>        
        
        
        
    <Dashboard_Navbar_Doctor/>
    <div className='w-full '>
    <DashboardSidebar sidebarData={sidebarData}/>
    </div>
    </>
  )
}



export default AdminDashboard




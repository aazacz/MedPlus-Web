import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import DateAndTime from '../components/DateAndTime'
import Dashboard_Navbar_User from '../components/Patient/Dashboard_Navbar_User'
import DashboardSidebar from '../components/Dashboard_sidebar/DashboardSidebar'
import sidebarData from '../components/Patient/sidebarData'

function Dashboard() {
const navigate= useNavigate()  
  //checking if the user already logged in using the JWT token
 

  return (
    <>        
               
        <div className='mx-5 flex justify-between h-[100px] items-center'>
        <Dashboard_Navbar_User/>
        <DateAndTime/>
        </div>
    <div className='w-full  flex-1  '>
    <DashboardSidebar sidebarData={sidebarData}/>
    </div>
    </>
  )
}



export default Dashboard




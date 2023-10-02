import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import DateAndTime from '../components/DateAndTime'
import Dashboard_Navbar_User from '../components/Dashboard_Navbar_User'
import UserDashboardSidebar from '../components/Sidebar_Userside/UserDashboardSidebar'


function Dashboard() {
const navigate= useNavigate()  
  //checking if the user already logged in using the JWT token
  useEffect(() => {
    if(localStorage.getItem('login')){
        const loginData = JSON.parse(localStorage.getItem("login"))
    
        if(loginData.login && loginData.token){  //if the login is true and a token is created
            navigate('/UserDashboard')         //navigate to userdashboard
           }
    }
}, [])

  return (
    <>        
        
        
        
    <Dashboard_Navbar_User/>
    <div className='w-full '>
    <UserDashboardSidebar/>
    </div>
    </>
  )
}



export default Dashboard




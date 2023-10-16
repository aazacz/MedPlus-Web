import React, { useState, useEffect,useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DateAndTime from '../components/DateAndTime'
import Dashboard_Navbar_User from '../components/Patient/Dashboard_Navbar_User'
import DashboardSidebar from '../components/Dashboard_sidebar/DashboardSidebar'
import sidebarData from '../components/patient/sidebarData'
import { useAuthUser, useIsAuthenticated } from "react-auth-kit"; 

function Dashboard() {
    const navigate = useNavigate()
    const auth = useAuthUser();
    // const userRole = auth.authState ? auth.authState.role : null
    //checking if the user already logged in using the JWT token
    const isAuthenticated = useIsAuthenticated()

  
  
    // useLayoutEffect(() => {
    //   // Check if the user is authenticated
    //   if(auth.authState && auth.authState.role === 'User'){
    //   if (isAuthenticated()) {
    //     console.log("logged in");
    //     navigate("/userDashboard") // Redirect to UserDashboard

    //   }          else navigate("/login") // Redirect to UserDashboard

    //   }
    //   else {
    //     console.log("userrole not found");
    //     navigate("/login") // Redirect to UserDashboard

    //   }  
      

    // }, [])

  return (
    <div className="h-screen flex flex-col">
      <div className="mx-5 flex justify-between h-[100px] items-center">
        <Dashboard_Navbar_User />
        <DateAndTime />
      </div>

      <div className="flex-1 ">
        <DashboardSidebar  sidebarData={sidebarData} bg={"lightgreen"} />
      </div>
    </div>
  );
}



export default Dashboard




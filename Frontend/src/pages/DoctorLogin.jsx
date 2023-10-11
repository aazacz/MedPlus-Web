import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import { RequireAuth, useIsAuthenticated } from "react-auth-kit"; // Import useAuth
import { useNavigate } from "react-router-dom"
import NavbarDoctor from '../components/Doctor/NavbarDoctor';


function DoctorLogin() {


  const isAuthenticated = useIsAuthenticated()
  console.log(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated

    if (isAuthenticated()) {
      navigate("/DoctorDashboard") // Redirect to UserDashboard
    }

  }, [])




  return (
    <>
      <NavbarDoctor/>
      <Outlet />

    </>
  )



}

export default DoctorLogin
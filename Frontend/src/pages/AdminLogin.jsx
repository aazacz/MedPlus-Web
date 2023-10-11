import React, { useEffect } from 'react'

import {  Outlet } from 'react-router-dom';
import {  useIsAuthenticated } from "react-auth-kit"; 
import { useNavigate } from "react-router-dom"
import NavbarAdmin from '../components/Admin/NavbarAdmin';


function AdminLogin() {


  const isAuthenticated = useIsAuthenticated()
  console.log(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
   

    if (isAuthenticated()) {
      navigate("/adminDashboard") // Redirect to UserDashboard
    }

  }, [])




  return (
    <>
      <NavbarAdmin />
      <Outlet />

    </>
  )



}

export default AdminLogin
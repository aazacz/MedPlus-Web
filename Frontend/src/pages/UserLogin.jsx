import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { Link, Outlet } from 'react-router-dom';
import { RequireAuth, useIsAuthenticated } from "react-auth-kit"; // Import useAuth
import { useNavigate } from "react-router-dom"
import NavbarUser from '../components/Patient/NavbarUser';

function UserLogin() {

  const dispatch = useDispatch()
  const isAuthenticated = useIsAuthenticated()
  console.log(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated

    if (isAuthenticated()) {

      

      navigate("/UserDashboard") // Redirect to UserDashboard
    }

  }, [])




  return (
    <>
      <NavbarUser />
      <Outlet />

    </>
  )



}

export default UserLogin
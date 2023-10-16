import React, {  useLayoutEffect } from 'react'
import {useDispatch} from "react-redux"
import { Link, Outlet } from 'react-router-dom';
import { RequireAuth, useIsAuthenticated } from "react-auth-kit"; // Import useAuth
import { useNavigate } from "react-router-dom"
import NavbarUser from '../components/Patient/NavbarUser';
import { useAuthUser } from 'react-auth-kit';

function UserLogin() {
 


  const isAuthenticated = useIsAuthenticated()
  const auth = useAuthUser();
  // const userRole = auth.authState ? auth.authState.role : null
  
  const navigate = useNavigate();

  useLayoutEffect(() => { 
    const userrole = auth.authState
       console.log(userrole);
      if(auth.authState && auth.authState.role === 'User'){
      if (isAuthenticated()) {
        navigate("/UserDashboard") // Redirect to UserDashboard
      }
    }else{
      navigate("/login")
    }
  },[])




  return (
    <>
      <NavbarUser />
      <Outlet />

    </>
  )



}

export default UserLogin
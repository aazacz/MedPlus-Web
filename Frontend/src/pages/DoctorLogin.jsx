import React, { useLayoutEffect,useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useAuthUser, useIsAuthenticated } from "react-auth-kit"; // Import useAuth
import { useNavigate } from "react-router-dom"
import NavbarDoctor from '../components/Doctor/NavbarDoctor';
import { Toaster } from 'react-hot-toast';  // for showing small alerts


function DoctorLogin() {

  const navigate = useNavigate();
  const auth = useAuthUser();
  // const userRole = auth.authState ? auth.authState.role : null
  //checking if the user already logged in using the JWT token
  const isAuthenticated = useIsAuthenticated()
  const userIsAuthenticated = isAuthenticated();

                                   

  useEffect(() => {

      // Check if the user is authenticated
      console.log("1");
      console.log("auth.authState:++ ", auth.authState );
      console.log("2");
   
      if(auth.authState && auth.authState.role === 'Doctor'){
        console.log("logged in"+auth.authState);
      if (userIsAuthenticated) {
        console.log("logged in");
        navigate("/DoctorDashboard") // Redirect to UserDashboard

      }          else navigate("/doctor") // Redirect to UserDashboard

      }
      else {
        console.log("userRole not found");
        navigate("/doctor") // Redirect to UserDashboard

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
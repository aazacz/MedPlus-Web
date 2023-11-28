import React from 'react'
import { useState } from 'react';
import { UserAuthCheck } from '../authentication';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const dashboardRoutes = ()=>{

  return(
  
    <Routes>
    <Route index element={<Dashboard />} />
    <Route path="previous" element={<PreviousConsultation />} />
    <Route path="overview" element={<Overview />} />
    <Route path="Profile" element={<ProfileUser />} />
    <Route path="labresult" element={<Labresult />} />
    <Route path="NewConsultation" element={<NewConsultation />} />
    </Routes>
   
  )
}



const Redirection=()=>{
  
  const navigate = useNavigate()
  useEffect(()=>{
  navigate('/login')
  },[])
  return null
}


const PrivateRouter = ({children,...rest}) => {

    const [authenticated,Setauthenticated] = useState(false)
  
    useEffect(()=>{
     
      const checkAuthentication = async()=>{
        const isAuthenticated = await UserAuthCheck() 
        console.log("isAuthenticated  is " +isAuthenticated);
        Setauthenticated(isAuthenticated)
      }

      checkAuthentication()
    
      },[])

      useEffect(()=>{



console.log("yes ia am " +authenticated);
      },[authenticated])
  
  return authenticated ? children : <Redirection/>

{/* <dashboardRoute/> */}
    
  
}

export default PrivateRouter
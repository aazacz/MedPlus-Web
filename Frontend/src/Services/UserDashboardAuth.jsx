import React, { useState, useEffect } from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import {UserAuthCheck,UserLoginCheck} from "./authentication" 
import Dashboard from '../pages/Dashboard';
import UserLogin from '../pages/UserLogin';
import LoginSectionUser from '../components/Patient/User_Login_Section/LoginSectionUser';
import LoginSectionOtpVerify from '../components/Patient/User_Login_Section/LoginSectionOtpVerify';

const LoginRoute=()=>{


return(
<Routes>

<Route path='User' element={<UserLogin />} />
<Route index element={<LoginSectionUser />} />
  <Route path="verifyotp" element={<LoginSectionOtpVerify />} />
</Routes>
)
}


const Redirection=()=>{
  const navigate = useNavigate()
  useEffect(()=>{
  navigate('/UserDashboard')
  },[])
  return null
}


const UserDashboardAuth = () => {
  
    const [authenticated,Setauthenticated] = useState(false)

    const navigate = useNavigate();
  
    
    useEffect(()=>{

      const checkAuthentication = async()=>{
        const isAuthenticated = await UserLoginCheck() 
        console.log("isAuthenticated is  " +isAuthenticated );
        Setauthenticated(isAuthenticated)
      }
     
      checkAuthentication()
    
      },[])

      // useEffect(()=>{
      //   if(!authenticated){
      //     console.log("not authenticated");
      //       navigate("/login")
      //   }
      // },[authenticated])
  

  return    !authenticated ? <LoginRoute/> : <Redirection/> 



}

   
  
  export default UserDashboardAuth
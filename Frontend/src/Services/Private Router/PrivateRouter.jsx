import React from 'react'
import { useState } from 'react';
import { UserAuthCheck } from '../authentication';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Redirection=()=>{
  
  const navigate = useNavigate()
  useEffect(()=>{
  navigate('/login')
  },[])
  return null
}


const PrivateRouter = ({children,...rest}) => {

    const [authenticated,Setauthenticated] = useState(true)
  
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

}

export default PrivateRouter
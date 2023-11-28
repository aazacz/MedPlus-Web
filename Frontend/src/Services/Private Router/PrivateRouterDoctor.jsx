import React from 'react'
import { useState } from 'react';
import { DocotorAuthCheck } from '../authentication';

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Redirection=()=>{
  const navigate = useNavigate()
  useEffect(()=>{
  navigate('/Doctor')
  },{})
  return
}


const PrivateRouterDoctor = ({children,...rest}) => {

    const [authenticated,Setauthenticated] = useState(false)
    
    useEffect(()=>{
     
      const checkAuthentication = async()=>{
        const isAuthenticated = await DocotorAuthCheck() 
        console.log("isAuthenticated  is " + isAuthenticated);
        Setauthenticated(isAuthenticated)
      }

      checkAuthentication()
    
      },[])

      useEffect(()=>{

      },[authenticated])
  u
  return   authenticated ? children : <Redirection/>


    
  
}

export default PrivateRouterDoctor
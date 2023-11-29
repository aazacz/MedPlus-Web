import React, { useState,useEffect }  from "react";
import { Navigate } from "react-router-dom";
import {HashLoader} from "react-spinners";
import { UserAuthCheck } from "../Services/authentication";


const PrivateRoute = ({user,children}) =>{
  let [loading, setLoading] = useState(true);
  const [authenticated,Setauthenticated] = useState(true)

  useEffect(()=>{
     
    const checkAuthentication = async()=>{
      const isAuthenticated = await UserAuthCheck() 
      console.log("isAuthenticated  is " +isAuthenticated);
     if(isAuthenticated){
        setLoading(false)
        Setauthenticated(isAuthenticated)
      }else{
        Setauthenticated(isAuthenticated)
      }
    }

    checkAuthentication()
  
    },[])




  let auth = true  
    return  authenticated ? (loading ? <div className="flex items-center justify-center w-screen h-screen"><HashLoader
    color="#cd233c"
    cssOverride={{}}
    loading
    size={66}
    speedMultiplier={1}
  /> </div>: children)  : <Navigate to="/login" replace/>  ;
  }


  export default PrivateRoute
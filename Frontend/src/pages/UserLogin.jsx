import React, { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import NavbarUser from '../components/Patient/NavbarUser';
import {UserAuthCheck} from "../Services/authentication" 



function UserLogin() {

  



  return (
    <>
      <NavbarUser />
      <Outlet />

    </>
  )



}

export default UserLogin
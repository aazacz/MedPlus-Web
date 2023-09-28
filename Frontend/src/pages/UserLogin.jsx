import React from 'react'
import NavbarUser from '../components/NavbarUser'
import LoginSectionUser from '../components/User_Login_Section/LoginSectionUser'
import { Link, Outlet } from 'react-router-dom';

function UserLogin() {
  return (
    <>
    <NavbarUser/>
    <Outlet/>
    
    
    </>
  )
}

export default UserLogin
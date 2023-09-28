import React from 'react'
import NavbarUser from '../components/NavbarUser'
import { Link, Outlet } from 'react-router-dom';
import SignupSectionUser from '../components/User_Login_Section/SignupSectionUser';

function UserSignup() {
  return (
    <>
    <NavbarUser/>
    <SignupSectionUser/>
        
    </>
  )
}

export default UserSignup
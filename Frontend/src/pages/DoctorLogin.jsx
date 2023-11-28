import React, { useEffect, useState,useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavbarDoctor from '../components/Doctor/NavbarDoctor';
import { DocotorAuthCheck } from '../Services/authentication';

function DoctorLogin() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await DocotorAuthCheck();
      setAuthenticated(isAuthenticated);
      console.log("useeffect running " + isAuthenticated);
    };
    checkAuthentication();
  }, []);

  useEffect(() => {
    console.log('authenticated:', authenticated); // Debugging: Check the value of authenticated
    if (authenticated) {
      console.log('Navigating to /DoctorDashboard'); // Debugging: Check if navigation is triggered
      navigate('/DoctorDashboard');
    }
  }, [authenticated, navigate]);

  return (
    <>
      <NavbarDoctor />
      <Outlet />
    </>
  );
}

export default DoctorLogin;

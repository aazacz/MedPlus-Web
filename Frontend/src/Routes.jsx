import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";


// User Components
import Homepage from "./pages/Homepage";
import UserLogin from "./pages/UserLogin.jsx";
import Dashboard from "./pages/Dashboard";
import UserSignup from "./pages/UserSignup";
import Labresult from "./components/Patient/Labresult";
import LoginSectionUser from "./components/Patient/User_Login_Section/LoginSectionUser";
import LoginSectionOtpVerify from "./components/Patient/User_Login_Section/LoginSectionOtpVerify"
import PreviousConsultation from "./components/Patient/PreviousConsultation"
import ProfileUser from "./components/Patient/ProfileUser";
import Overview from "./components/Patient/Overview";

// Admin Components
import AdminLogin from "./pages/AdminLogin";
import LoginSectionAdmin from "./components/Admin/Admin_Login_Section/LoginSectionAdmin";
import AdminDashboard from "./pages/AdminDashboard";
import Customers from "./components/Admin/Customers";



// Doctor Components
import DoctorLogin from "./pages/DoctorLogin";
import LoginSectionDoctor from "./components/Doctor/Doctor_Login_Section/LoginSectionDoctor";
import DoctorSignup from "./pages/DoctorSignup";
import DoctorDashboard from "./pages/DoctorDashboard";
import NewConsultation from './components/Patient/NewConsultation';
import DoctorOverview from "./components/Doctor/DoctorOverview";
import DoctorsList from './components/Admin/DoctorsList';
import AddDoctor from './components/Admin/AddDoctor';


const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: '/signup',
      element: <UserSignup />
    },
    {
      path: "/login",
      element: <UserLogin />,
      children: [
        { index: true, element: <LoginSectionUser /> },
        { path: "verifyotp", element: <LoginSectionOtpVerify /> }
      ]
    },
    {
      path: "/UserDashboard",
      element: (
        <RequireAuth loginPath='/login'> <Dashboard /> </RequireAuth>
      ),
      children: [
        { index: true, element: <Overview />  },
        { path: 'previous', element: <PreviousConsultation /> },
        { path: 'overview', element: <Overview /> },
        { path: 'Profile', element: <ProfileUser /> },
        { path: 'labresult', element: <Labresult /> },
        { path: 'NewConsultation', element: <NewConsultation /> },
      ]
    },
    {
      path: "/doctor",
      element:<RequireAuth loginPath='/doctor'> <DoctorLogin/></RequireAuth>,
      children: [
        { index: true, element: <LoginSectionDoctor /> },
        { path: "verifyotp", element: <LoginSectionOtpVerify /> }
      ]
    },
    {
      path: '/doctor/signup',
      element: <DoctorSignup />
    },
    {
      path: "/DoctorDashboard",
      element: ( <RequireAuth loginPath='/doctor'> <DoctorDashboard /> </RequireAuth> ), // Find if the user has a session or not
      children: [
        { index: true, element: <DoctorOverview /> },
        { path: 'Overview', element: <DoctorOverview /> },
        { path: 'labresult', element: <Labresult /> },
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin />,
      children: [
        { index: true, element: <LoginSectionAdmin /> },
  
      ]
    },
    {
      path: "/adminDashboard",
      element: (
        <RequireAuth loginPath='/login'> <AdminDashboard /> </RequireAuth>
      ),
      children: [
        { index: true, element: <Overview /> },
        { path: 'customers', element: <Customers /> },
        { path: 'DoctorsList', element: <DoctorsList /> },
        { path: 'AddDoctor', element: <AddDoctor /> },
        { path: 'Profile', element: <ProfileUser /> },
        { path: 'labresult', element: <Labresult /> },
      ]
    }
  ])

  export default router
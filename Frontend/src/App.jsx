//Other Hooks and Components
import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";

// User Components
import Homepage from "./pages/Homepage";
import UserLogin from "./pages/UserlOGIN.JSX";
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
      { index: true, element: <Overview /> },
      { path: 'previous', element: <PreviousConsultation /> },
      { path: 'overview', element: <Overview /> },
      { path: 'Profile', element: <ProfileUser /> },
      { path: 'labresult', element: <Labresult /> },
    ]
  },
  {
    path: "/doctor",
    element: <DoctorLogin />,
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
    element: (
      <RequireAuth loginPath='/doctor'> <DoctorDashboard /> </RequireAuth>
    ), // Find if the user has a session or not
    children: [
      { index: true, element: <Overview /> },
      { path: 'overview', element: <Overview /> },
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
      { path: 'overview', element: <Overview /> },
      { path: 'Profile', element: <ProfileUser /> },
      { path: 'labresult', element: <Labresult /> },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

import React from 'react';
import { createBrowserRouter } from "react-router-dom";


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
import UserDashboardAuth from './Services/UserDashboardAuth';
import PrivateRouter from './Services/Private Router/PrivateRouter';
import PrivateRouterDoctor from './Services/Private Router/PrivateRouterDoctor';
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.jsx';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />

        <Route path='/signup' element={<UserSignup />} />

        <Route path='/login' element={<UserLogin />}>
          <Route index element={<LoginSectionUser />} />
          <Route path='verifyotp' element={<LoginSectionOtpVerify />} />
        </Route>

        <Route path='/UserDashboard' element={<PrivateRoute user={"user"}> <Dashboard /> </PrivateRoute>}>
          <Route index element={<Overview />} />
          <Route path='previous' element={<PreviousConsultation />} />
          <Route path='overview' element={<Overview />} />
          <Route path='Profile' element={<ProfileUser />} />
          <Route path='labresult' element={<Labresult />} />
          <Route path='NewConsultation' element={<NewConsultation />} />
        </Route>

        <Route path='/doctor' element={<DoctorLogin />} >
          <Route index element={<LoginSectionDoctor />} />
          <Route path='verifyotp' element={<LoginSectionOtpVerify />} />
        </Route>

        <Route path='/doctor/signup' element={<DoctorSignup />} />

        <Route path='/doctordashboard' element={ <DoctorDashboard /> }>
          <Route index element={<DoctorOverview />} />
          <Route path='Overview' element={<DoctorOverview />} />
          <Route path='labresult' element={<Labresult />} />
          <Route path='previous' element={<div>previous Consultations loaded</div>} />
          <Route path='profile' element={<div>profile loaded</div>} />
        </Route>

        <Route path='/admin' element={<AdminLogin />}>
          <Route index element={<LoginSectionAdmin />} />
        </Route>

        <Route path='/adminDashboard' element={<AdminDashboard />}>
          <Route index element={<Overview />} />
          <Route path='customers' element={<Customers />} />
          <Route path='DoctorsList' element={<DoctorsList />} />
          <Route path='AddDoctor' element={<AddDoctor />} />
          <Route path='Profile' element={<ProfileUser />} />
          <Route path='labresult' element={<Labresult />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}






export default Routers

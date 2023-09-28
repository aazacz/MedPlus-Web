import { useEffect, useState } from "react";
import './App.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginSectionUser from "./components/User_Login_Section/LoginSectionUser";
import HomePageBody from "./components/HomePageBodySec";
import Homepage from "./pages/Homepage";
import UserLogin from "./pages/UserlOGIN.JSX";
import LoginSectionOtpVerify from "./components/User_Login_Section/LoginSectionOtpVerify";
import Dashboard from "./pages/Dashboard"
import UserSignup from "./pages/UserSignup";


const router = createBrowserRouter([
    {
      path: "/",
      element: < Homepage/>,
    },
    {
      path:'/signup',
      element:<UserSignup/>

    },
    {
      path: "/login",
      element: <UserLogin/>,
      children:[
        {index:true, element:<LoginSectionUser/>},
        {path:"verifyotp", element:<LoginSectionOtpVerify/>}
      ]
    },
    {
      path: "/UserDashboard",
      element: <Dashboard/>,
     },

     {
      path: "/doctor",
      element: <Dashboard/>,
     }


  ])

function App() {
  

  return (
    <>

   <RouterProvider router={router} />

   


    </>
  )
}

export default App

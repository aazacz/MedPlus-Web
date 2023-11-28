//Other Hooks and Components
import React from 'react';
import './App.css'
import {  RouterProvider } from "react-router-dom";
import Routers from './Routes';
import { Toaster } from 'react-hot-toast';  // for showing small alerts
import RouterComponent from './Routes';



function App() {
  return (
    <>
      <Toaster  position="top-center"  reverseOrder={false} />
   
      {/* <RouterProvider router={router} /> */}
    <Routers/>
    </>
  )
}

export default App;

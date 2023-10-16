//Other Hooks and Components
import React from 'react';
import './App.css'
import {  RouterProvider } from "react-router-dom";
import router from './Routes';
import { Toaster } from 'react-hot-toast';  // for showing small alerts



function App() {
  return (
    <>
      <Toaster  position="top-center"  reverseOrder={false} />

      <RouterProvider router={router} />
    </>
  )
}

export default App;

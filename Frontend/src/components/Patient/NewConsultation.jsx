import React, { useMemo, useState, useLayoutEffect } from 'react';
import { useDispatch } from "react-redux";
import { size } from "../../Redux/userSlice"
import { useAuthUser } from 'react-auth-kit'
import { useFormik } from 'formik';
import axiosInstance from '../../Services/Axiosinstance';

function NewConsultation() {

  const auth = useAuthUser()

  const [User, SetUser] = useState("User")
  const dispatch = useDispatch()


  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      Name: '',
      Department: '',
      Doctor: '',
      Date: ''
    },
    onSubmit: values => {
      axiosInstance.post('/createConsultation',values).then(()=>{


      })
    
    },
  });
  return (
    <>


      <div className='w-full flex justify-center pt-5'  >
        <div className='w-3/4 h-[300px]  bg-opacity-10 flex flex-col items-center justify-center pt-5 pb-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  '  >

          <form onSubmit={formik.handleSubmit}>
            <div className='text-left text-xl w-full text-black text-opacity-80  font-medium' >Book New Consultation</div>
            <div className='flex mt-5'>
              <div className='flex flex-col items-start'>
                <label className='' htmlFor="email">Name</label>

                <input
                  className='px-3 w-[300px] h-8  border-[1px] rounded-md'
                  id="email"
                  name="email"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='ml-5 mr-3' htmlFor="email">Department</label>

                <input
                  className='px-3 ml-4 w-[300px] h-8  border-[1px] rounded-md'
                  id="Department"
                  name="Department"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Department}
                />
              </div>
            </div>


            <div className='flex  mt-5'>

              <div className='flex flex-col items-start'>

                <label className='mr-3' htmlFor="email">Doctor</label>
                <input
                  className='px-3 w-[300px] h-8  border-[1px] rounded-md'
                  id="Department"
                  name="Doctor"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Doctor}
                />
              </div>

              <div className='flex flex-col items-start'>
                <label className='ml-5 mr-3' htmlFor="date">Date</label>

                <input
                  className='px-3 ml-4 w-[300px] h-8 border-[1px] rounded-md'
                  id="date"
                  name="date"
                  type="date" // Use type="date" for date input
                  onChange={formik.handleChange}
                  value={formik.values.date}
                />
              </div>

            </div>
            <div className='w-full h-[50px] '>
            <button className=' mt-5 h-[35px] rounded-md w-auto px-4 text-white font-medium hover:bg-lightgreen2 hover:transition-all hover:duration-300 hover:px-5 hover:h-[39px]  bg-lightgreen' type="submit">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewConsultation 
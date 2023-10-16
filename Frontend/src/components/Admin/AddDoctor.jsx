import React, { useMemo, useState, useLayoutEffect } from 'react';
import { useDispatch } from "react-redux";
import { size } from "../../Redux/userSlice"
import { useAuthUser } from 'react-auth-kit'
import { useFormik } from 'formik';
import medicalDepartment from './medicalDepartments'
import axiosInstance from "../../Services/Axiosinstance"
function AddDoctor() {

 
  const auth = useAuthUser()

  const [User, SetUser] = useState("User")
  const dispatch = useDispatch()

  const date = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
  ]




  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      Name: '',
      Department: '',
      Fellowship: '',
      Date: [],
      Username: ''
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      const doctorDetails = values
      axiosInstance.post('/admin/addDoctor',doctorDetails).then((res)=>{
      if(res.data.message === 'User registered successfully'){
        
        resetForm()
      }
            })

   

    },
  });
  const { resetForm } = formik;
  
  return (
    <>


      <div className='w-full flex justify-center pt-5'  >
        <div className='w-3/4 h-[370px]  bg-opacity-10 flex flex-col items-center justify-center pt-5 pb-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  '  >

          <form onSubmit={formik.handleSubmit}>
            <div className='text-left text-xl w-full text-black text-opacity-80  font-medium' >Account Creation For Doctor </div>
            <div className='flex mt-5'>
              <div className='flex flex-col items-start'>
                <label className='' htmlFor="email">Name</label>

                <input
                  className='px-3 w-[300px] h-8  border-[1px] rounded-md'
                  id="Name"
                  name="Name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Name}
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='ml-5 mr-3' htmlFor="email">Department</label>

                <select // Use a select element for the department dropdown
                className='px-3 ml-4 w-[300px] h-8 border-[1px] rounded-md'
                id="Department"
                name="Department"
                onChange={formik.handleChange}
                value={formik.values.Department}
              >
                <option value="">Select Department</option>
                {medicalDepartment.map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
              </div>
            </div>


            <div className='flex  mt-5'>

              <div className='flex flex-col items-start'>

                <label className='mr-3' htmlFor="email">Fellowship</label>
                <input
                  className='px-3 w-[300px] h-8  border-[1px] rounded-md'
                  id="Department"
                  name="Fellowship"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Fellowship}
                />
              </div>

              <div className='flex flex-col items-start'>
                <label className='ml-5 mr-3' htmlFor="date">Date</label>
              
              
                <select 
                className='px-3 ml-4 w-[300px] h-8 border-[1px] rounded-md'
                id="Date"
                name="Date"
                onChange={formik.handleChange}
                value={formik.values.Date}
                multiple
                  
              >
                <option value="">Select Working days </option>
                {date.map((days) => (
                  <option key={days} value={days}>
                    {days}
                  </option>
                ))}
              </select>

              </div>

            </div>

            <div className='flex mt-5'>
              <div className='flex flex-col items-start'>
                <label className='mr-3' htmlFor="Username">Username</label>
                <input
                  className='px-3 w-[300px] h-8 border-[1px] rounded-md'
                  id="Username"
                  name="Username"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Username}
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

export default AddDoctor 
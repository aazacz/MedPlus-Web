import React, { useMemo, useState } from 'react';
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import medicalDepartment from './medicalDepartments'
import axiosInstance from "../../Services/AxiosInstance/User/AxiosinstanceUser"
import { MySwal } from '../sweetalert';
import { GoChevronDown ,GoChevronUp } from "react-icons/go";

const CustomDropdown = ({ days, formik }) => {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (day) => {
    formik.handleChange({
      target: {
        name: 'Date',
        value: formik.values.Date.includes(day)
          ? formik.values.Date.filter((selectedDay) => selectedDay !== day)
          : [...formik.values.Date, day],
      },
    });
  };

  return (
    <div className="relative ml-4  w-[300px] h-8  border-[1px] rounded-md ">
      <div className="flex items-center  justify-between cursor-pointer"
        onClick={toggleDropdown}  >
        <span className="   ml-4">Select Dates</span>
        <span className="text-gray-500">
          {isOpen ? <GoChevronDown/>: <GoChevronUp/>}
        </span>
      </div>
      {isOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-md border divide-y">
          {days.map((day) => (
            <div key={day} className="flex items-center p-2">
              <input
                type="checkbox"
                id={day}
                name="Date"
                value={day}
                onChange={() => handleCheckboxChange(day)}
                checked={formik.values.Date.includes(day)}
              />
              <label htmlFor={day} className="ml-2">
                {day}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};







function AddDoctor() {




  const [User, SetUser] = useState("User")
  const dispatch = useDispatch()

  const [selectedDays, setSelectedDays] = useState([]);
  const days = [
    "MON",
    "TUE",
    "WED",
    "THUR",
    "FRI",
    "SAT",
    "SUN"
  ]


  const handleSubmit = ()=>{

    MySwal.fire({
      title: 'You are about to create a new Doctor Account',
      text: "Please thorougly check before proceeding",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Create New'
    }).then((result) => {
      if (result.isConfirmed) {
        
        formik.handleSubmit
      
      }
    })
   

  }


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
      axiosInstance.post('/admin/addDoctor', doctorDetails).then((res) => {
        if (res.data.message === 'User registered successfully') {

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

          <form >
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
                <label className='ml-5 mr-3'>Working days in a week </label>

              <CustomDropdown days={['Monday', 'Tuesday', 'Wednesday',"Thursday","Friday","Saturday","Sunday"]} formik={formik} />

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
              <button  onClick={handleSubmit}  className=' mt-5 h-[35px] rounded-md w-auto px-4 text-white font-medium hover:bg-lightgreen2 hover:transition-all hover:duration-300 hover:px-5 hover:h-[39px]  bg-lightgreen' type="button">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddDoctor 
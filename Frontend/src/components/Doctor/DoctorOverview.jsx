import React, { useState } from 'react'


function DoctorOverview() {
  const [User, SetUser] = useState("User")
  return (
    <>
      <div className=' h-full '>


        <div className=' w-full h-[300px] bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200  flex items-center justify-center'>
          {/* Parent div */}
          <div
            style={{
              backgroundImage: 'url("public/image_1696907445503.jpg")',
              backgroundSize: 'contain',
            }}
            className='z-30 w-[200px] h-[200px] rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]'
          ></div>

        </div>

        <div className=' mx-9  '>
          <div className='  mt-[-30px] my-0 h-[80px] bg-slate-200 flex flex-col justify-center '>
            <div className='flex h-1/2'>
              <div className='w-1/2  flex items-center justify-center' ><h1>Name</h1> </div>
              <div className='w-1/2 flex items-center justify-center' ><h1>Department </h1> </div>
            </div>
            <div className='flex h-1/2'>
              <div className='w-1/2  flex items-center justify-center' ><h1 className='text-lg font-medium'>Dr Abhilash abib</h1> </div>
              <div className='w-1/2 flex items-center justify-center' ><h1 className='text-lg font-medium'>Psycology </h1> </div>
            </div>
           
          </div>


          <div className=' ml-5  flex items-start'>
            <span className='text-[18px]'>Hi<span className='font-medium'> {User}</span>Welcome Doctor to your Profile</span>

          </div>

          <div className='flex w-full '>

            <div className="rounded-md border-2 w-[800px]">
              <table className='table-fixed text-center w-[800px]'>
                <thead>
                  <tr className=' '>
                    <th colSpan="2" className='px-5 py-4  text-lg text-left' >Previous Consultations</th>
                  </tr>
                  <colgroup>
                    <col className='w-[200px] ' />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <tr>
                    <th className='font-bold p-2 border-b text-left'>Doctor Name</th>
                    <th className='font-bold p-2 border-b '>Department</th>
                    <th className='font-bold p-2 border-b '>Date</th>
                    <th className='font-bold p-2 border-b '>Next Consultation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-left p-2 '>Dr Joseph</td>
                    <td>Oncology</td>
                    <td>01-09-2023</td>
                    <td>01-10-2023</td>
                  </tr>
                </tbody>
              </table>
            </div>








          </div>
        </div>
      </div>




    </>
  )
}

export default DoctorOverview 
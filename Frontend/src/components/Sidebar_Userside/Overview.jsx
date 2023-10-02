import React, { useState } from 'react'


function Overview() {
  const [User, SetUser] = useState("User")
  return (
    <>
      <div>
        <div className=' ml-5  flex items-start'>
          <span className='text-[18px]'>Hi<span className='font-medium'> {User}</span> Welcome to your Profile</span>

        </div>

        <div className='flex w-full '>

        <div className="rounded-md border-2 w-[800px]">
  <table className='table-fixed text-center w-[800px]'>
    <thead>
      <tr className=' '>
        <th colSpan="2" className='px-5 py-4  text-lg text-left' >Previous Consultations</th>
      </tr>
      <colgroup>
        <col  className='w-[200px] ' /> 
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




    </>
  )
}

export default Overview 
import React, { Component, useRef, useMemo, useState, useLayoutEffect, useEffect } from 'react';
import { options, data } from './chart'
import { Bar } from 'react-chartjs-2';
import { useDispatch } from "react-redux";
import {useAuthUser ,useAuthHeader} from 'react-auth-kit'
import axios from "axios"
function Customers() {



  const [Users, SetUsers] = useState([])
  const [User, SetUser] = useState("User")
  const dispatch = useDispatch()

  // useLayoutEffect(() => {
  //   const parentDiv = document.getElementById("parentDiv");
  //   const parentDivHeight = parentDiv.clientHeight
  //   console.log("parentDivHeight    " + parentDivHeight);

  //   const setDynamicHeight = () => {
  //     const pageHeight = parentDivHeight


  //     console.log("pageHeight in function  " + pageHeight)


  //     setDivHeight(`${pageHeight}px`)
  //     dispatch(
  //       size({
  //         size: divHeight
  //       })
  //     )
  //   }
  //   setDynamicHeight();
  //   window.addEventListener('resize', setDynamicHeight);

  //   // Cleanup by removing the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('resize', setDynamicHeight);
  //   };
  // }, []);


useEffect(() => {
axios.get("http://localhost:6002/admin/getUser").then((res)=>{
  console.log(res.data.user);
  SetUsers(res.data.user)
})

}, [])




  return (
    <>
      <div id='parentDiv' className=' flex flex-col items-center  h-[560px] '>

        <div className=' ml-5  flex items-start'>
          <span className='text-[18px]'>Hi<span className='font-medium'> {User}</span> Previous Consultation</span>

        </div>
   
      

        {/*chart added*/}
        <div className='flex flex-col w-full items-center justify-center mt-7 '>

          {/* <div className="rounded-md border-[2p]    w-[847px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <table className='caret-transparent mx-6    mb-5 table-auto text-center w-[800px]' {...getTableProps()}>
           
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th  className='font-bold  py-4 border-b text-left'{...column.getHeaderProps()}>
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
           
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className='even:bg-lightgreen3'{...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td className='text-left ' {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
           
            <div>
              <button className='px-2' onClick={() => gotoPage(0)}>First</button>
              <button className='px-2' onClick={() => previousPage()}>Previous</button>
              <button className='px-2' onClick={() => nextPage()}>Next</button>
              <button className='px-2' onClick={() => gotoPage(pageOptions.length - 1)}>Last</button>
              <span>
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
              <span>
                | Go to page:{' '}
                <input
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    gotoPage(page);
                  }}
                  style={{ width: '50px' }}
                />
              </span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div> */}





          <div className="rounded-md border-[2p]   w-[800px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <table className='caret-transparent table-fixed text-center w-[800px]'>
  <thead>
    <tr className=''>
      <th colSpan="2" className='px-5 py-4 text-lg text-left'>Patients List</th>
    </tr>
    <colgroup>
      <col className='w-[200px]' />
      <col />
      <col />
      <col />
    </colgroup>
    <tr>
      <th className='font-bold p-2 border-b text-left'>Patient Name</th>
      <th className='font-bold p-2 border-b '>Place</th>
      <th className='font-bold p-2 border-b '>Email</th>
      <th className='font-bold p-2 border-b '>Next Consultation</th>
    </tr>
  </thead>
  <tbody>
    {Users.map((user, index) => (
      <tr key={index}>
        <td className='text-left p-2'>{user?.name}</td>
        <td>{user?.district}</td>
        <td>{user?.email}</td>
        <td>{user?.nextConsultation}</td>
      </tr>
    ))}
  </tbody>
</table>

          </div>








        </div>
      </div>




    </>
  )
}

export default Customers 
import React, { useMemo, useState,useEffect,useLayoutEffect } from 'react'
import { useTable, usePagination, useFilters } from 'react-table'

import { Link,useNavigate} from 'react-router-dom'; // Import useLocation
import axiosInstance from '../../Services/Axiosinstance';

function DoctorsList() {

  const  navigate = useNavigate()
  const [Mock_DATA, setMockData] = useState([]);


  useEffect(()=>{
    axiosInstance.get('/admin/getDoctors').then((res)=>{
      console.log(res.data.Doctors);
      setMockData(res.data.Doctors)
    })
  },[])

  const COLUMNS = [

    {
        Header:"Doctor Name	",
        accessor:'name'
    },
    {
        Header:"Department",
        accessor:'Department'
    },
    {
        Header:"Date",
        accessor:'Date'
    },
    {
        Header:"email",
        accessor:"email"
    }
]



  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => Mock_DATA, [])

  const tableInstance = useTable({
    columns: columns,
    data: data,
    initialState: { pageIndex: 0, pageSize: 20 }
  }, useFilters, usePagination)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Current page of data
    pageOptions, // Available page options
    state: { pageIndex, pageSize }, // Page index and page size
    gotoPage, // Function to navigate to a specific page
    previousPage, // Function to go to the previous page
    nextPage, // Function to go to the next page
    setPageSize,

  } = tableInstance



  return (
    <div className='flex flex-col justify-center items-center mx-[100px]'>
     <div className='w-full text-start px-6'>
      <h1 className='font-bold text-2xl '>Doctors Management</h1>
      </div>

      <div className=' my-5 w-full text-start px-6'>  

      <Link to={"/adminDashboard/AddDoctor"} >
          <button  className='pt-[-10px] w-[120px] text-gray-100 rounded-md  h-8 bg-lightgreen'>Add Doctor <span className='text-[20px]'>+</span></button>
      </Link>

      </div>

      <div className="rounded-md border-[2p]    w-[847px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <table className="caret-transparent mx-6 mb-5 table-auto text-center w-[800px]" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className="font-bold py-4 border-b text-left" {...column.getHeaderProps()}>
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
                <tr className="even:bg-lightgreen3" {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td className="text-left" {...cell.getCellProps()}>
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
      </div>



    </div>
  )
}

export default DoctorsList
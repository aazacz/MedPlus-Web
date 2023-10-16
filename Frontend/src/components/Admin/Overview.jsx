import React, { Component, useRef, useState,useEffect,useLayoutEffect } from 'react';
import {options,data} from './chart'
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
import { size } from "../../../src/Redux/userSlice"

function Overview() {
 const [divHeight, setDivHeight] = useState('auto')
 const [User, SetUser] = useState("User")
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const parentDiv = document.getElementById("parentDiv");
    const parentDivHeight = parentDiv.clientHeight
    console.log("parentDivHeight    "+ parentDivHeight);

    const setDynamicHeight = () => {
      const pageHeight = parentDivHeight
   
      
      console.log("pageHeight in function  " +pageHeight)


      setDivHeight(`${pageHeight}px`)
      dispatch(
        size({
          size:divHeight
                  })
        )
    }
    setDynamicHeight();
    window.addEventListener('resize', setDynamicHeight);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', setDynamicHeight);
    };
  }, []);


  return (
    <>
      <div id='parentDiv' className=' flex flex-col items-center justify-center '>
        
        <div className=' ml-5  flex items-start'>
          <span className='text-[18px]'>Welcome to your Profile</span>

        </div>
    

                        {/*chart added*/}
       <div className='w-[800px] h-[300px] flex justify-center'> 
                <Bar data={data} options={options} />
        </div>
                        {/*chart added*/}

        <div className='flex w-full justify-center mt-7 '>

          <div className="rounded-md border-[2p]   w-[800px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <table className='caret-transparent  table-fixed text-center w-[800px]'>
              <thead>
                <tr className=' '>
                  <th colSpan="2" className='px-5 py-4  text-lg text-left' >Next Consultation</th>
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




    </>
  )
}

export default Overview 
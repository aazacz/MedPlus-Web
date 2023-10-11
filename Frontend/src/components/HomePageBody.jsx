import React from "react";
import logo from "../assets/MED+Logo.png"
import homepage_photo1 from "../assets/homepage_photo1.png"
import Button_photo1 from "../assets/card 1.png"
import doctorPng from "../assets/doctor.png"
import prescriptionPng from "../assets/prescription.png"
import dr1 from "../assets/dr1.jpeg"
import dr2 from "../assets/dr2.png"
import dr3 from "../assets/dr3.png"
import Banner from "../assets/banner.webp"


function HomePageBody() {


    return (
        <>
            <section className=" h-auto mt-8 mx-5 md:mx-12 xl:mx-[150px] ">

                <div className="flex flex-col  md:flex-row  md:justify-between">
                    <div>
                        <div className="flex items-center ml-5">
                            <span className=" text-[20px] font-[Arial] font-extrabold 
                                            md:text-[35px]">Health Powered by</span>
                            <img className="  ml-[7px] w-[68px] md:w-[120px]" src={logo} alt="LOGO" />
                        </div>

                        <div className="mx-5 flex  item">
                            <p className="text-left font-[Arial] md:w-[500px] font-normal md:text-xl ">Supporting better health outcomes and clinical excellence with intelligent technology </p>
                        </div>
                    </div>
                    <div className="mx-5">
                        <img className=" md:h-[150px]" src={homepage_photo1} alt="" />
                    </div>


                </div>

                <div className="md:mt-[-30px]  mt-[30px]">
                    <div className="  mx-5 flex justify-center md:flex-none md:justify-start ">
                        <button className="flex items-center   w-[180px]  h-[30px]  bg-lightPink  text-[9px]  text-lightPinkDark  rounded-md
                                        md:w-[300px] md:h-[50px] md:text-[17px] md:rounded-lg">
                            <img className="ml-[10px] mr-[5px] h-[20px] md:h-[30px] " src={Button_photo1} alt="" />
                            Get your Med+ Card Now</button>
                    </div>

                    <div className=" mx-5 flex justify-center md:flex-none md:justify-start">

                        <div className="mt-[10px]">
                            <button className="flex  items-center   w-[85px]  h-[30px]  bg-lightPink  text-[8px]  text-lightPinkDark  text-left rounded-md
                                            md:w-[145px] md:h-[50px] md:text-[14px] md:rounded-lg hover:transition-shadow-black">
                                <img className="ml-[10px] mr-[5px] h-[20px] md:h-[30px]" src={doctorPng} alt="" />
                                Book an Appointment</button>
                        </div>


                        <div className="mt-[10px] ml-[10px]">
                            <button className="flex  items-center   w-[85px]  h-[30px]  bg-lightPink  text-[8px]  text-lightPinkDark  text-left rounded-md
                                            md:w-[145px] md:h-[50px] md:text-[14px] md:rounded-lg">
                                <img className="ml-[10px] mr-[5px] h-[20px] md:h-[30px]" src={prescriptionPng} alt="" />
                                Check Your Results</button>
                        </div>
                    </div>
                </div>



                <div className=" mt-4    md:w-full md:mx-4 md:flex md:mt-[20px] md:justify-between md:flex-row center  
                w-full px-7 py-6  bg-lightgreen3 rounded-2xl"> 

                    <div className=" w-[300px]  md:w-[600px]   md:flex md:flex-col md:py-7 ">
                        
                        <h1 className="  text-xl  text-left font-[Times-New-Roman] md:font-medium md:text-2xl mb-[10px]
                                         ">Medical Quality is in our DNA</h1>
                        
                        <h4 className="md:text-left text-left text-sm md:text-xl md:leading-[40px]  "> There are no shortcuts to becoming a qualified doctor, and there
                            are no shortcuts to developing an AI that raises the bar for clinical
                            accuracy, user accessibility, and industry regulation.</h4>
                    </div>


                    <div className=" flex flex-col">

                    <div className=" flex items-center justify-center">
                        <div className="w-[80px] border-[1px] h-[80px] rounded-[50%] mx-[5px]    overflow-hidden
                                        md:w-[120px] md:border-[1px] md:h-[120px] md:rounded-[50%] md:mx-[5px]    md:overflow-hidden"  >
                            <img className=" md:h-[200px] object-cover h-auto w-[400px]" src={dr3} alt="" />
                        </div>
                        <div className="w-[100px] border-2 border- h-[100px] rounded-[50%] mx-[5px] ml-[-30px]  overflow-hidden 
                                        md:w-[170px] md:border-2 md:border- md:h-[170px] md:rounded-[50%] md:mx-[5px] md:ml-[-50px]  md:overflow-hidden md:z-50"  >
                            <img className=" md:h-[200px] object-cover h-auto w-[400px]" src={dr1} alt="" />

                        </div>
                        <div className="w-[80px] border-[1px] h-[80px] rounded-[50%] mx-[5px]   ml-[-30px] overflow-hidden
                                        md:w-[120px] md:border-[1px] md:h-[120px] md:rounded-[50%] md:mx-[5px]  md:ml-[-30px] md:overflow-hidden"  >
                            <img className=" md:h-[200px] object-cover h-auto w-[400px]" src={dr2} alt="" />
                        </div>
                        </div>
                        <h1 className="text-[12px]  md:text-[18px]  md:max-xl:font-medium md:max-xl:leading-3">Dr Issac Mathew</h1>
                                             <h1  className="text-[9px]  md:text-[14px]">Head Cardio</h1>
                    </div>
                </div>

                <div className=" mt-4 w-full  bg-darkgreen rounded-2xl
                                 md:w-full md:mx-4 md:flex md:mt-[20px] md:justify-between md:flex-row center ">

                    <div className="w-full px-6 py-6 text-left text-white 
                                    md:w-1/2 md:flex md:flex-col md:justify-center
                                    lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
                    <h2 className="text-xl font-semibold">NATIONAL IMMUNIZATION AWARENESS MONTH</h2>
                    <p  className="mt-[30px] text-xl">Staying up to date on your vaccines can protect you
                                                     and your loved ones from preventable diseases.</p>
                    <p  className="mt-[30px] text-xl">Check the immunization schedule for guidance on 
                                                        recommended routine vaccinations</p>
                    </div>

                    <div className="w-full px-6 py-3 text-left text-white overflow-hidden rounded-r-2xl
                                    md:w-1/2 md:px-0 md:py-0 md:flex md:flex-col md:justify-center md:overflow-hidden md:rounded-r-2xl
                                    lg:w-1/2 lg:px-0 lg:py-0 lg:flex lg:flex-col lg:justify-center lg:overflow-hidden lg:rounded-r-2xl ">
                        <img className="object-cover" src={Banner} alt="" />
                    </div>
                    
                    
                    
                    </div> 




            </section>

        </>
    )
}

export default HomePageBody
import React from "react"
import AppsIcon from '@mui/icons-material/Apps';
import BiotechIcon from '@mui/icons-material/Biotech';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';
import { FaUserDoctor } from "react-icons/fa6";
import { FaSalesforce } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa6";
import { BsFillGrid1X2Fill } from "react-icons/bs";

const sidebarData=[

    {
        title:"Dashboard",
        icon:<AppsIcon/>,
        link:"/adminDashboard",
        first:true
    },
    {
        title:"Doctors",
        icon:<FaUserDoctor/>,
        link:"/adminDashboard/DoctorsList"
    },
    {
        title:"Customers ",
        icon:<NoteAddIcon/>,
        link:"/adminDashboard/customers"
    },
    {
        title:"Banner Management",
        icon:<FaMicrosoft/>,
        link:"/adminDashboard/BannerManage"
    },
    {
        title:"Sales Report",
        icon:<FaSalesforce/>,
        link:"/adminDashboard/Profile"
    },
    


]

 export default sidebarData



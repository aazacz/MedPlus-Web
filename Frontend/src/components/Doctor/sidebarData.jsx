import React from "react"
import AppsIcon from '@mui/icons-material/Apps';
import BiotechIcon from '@mui/icons-material/Biotech';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';

const sidebarData=[

    {
        title:"Overview",
        icon:<AppsIcon/>,
        link:"/doctordashboard",
        first:true
    },
    {
        title:"Lab Result",
        icon:<BiotechIcon/>,
        link:"/doctordashboard/labresult"
    },
    {
        title:"Consultations",
        icon:<AssignmentIcon/>,
        link:"/doctordashboard/previous"
    },
    
    {
        title:"Profile",
        icon:<PersonPinIcon/>,
        link:"/doctordashboard/Profile"
    },
    


]



 export default sidebarData



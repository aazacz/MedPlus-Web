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
        link:"/UserDashboard",
        first:true
    },
    {
        title:"Lab Result",
        icon:<BiotechIcon/>,
        link:"/UserDashboard/labresult"
    },
    {
        title:"Previous Consultations",
        icon:<AssignmentIcon/>,
        link:"/UserDashboard/previous"
    },
    {
        title:"Book New Consultation ",
        icon:<NoteAddIcon/>,
        link:"/UserDashboard/newconsultation"
    },
    {
        title:"Profile",
        icon:<PersonPinIcon/>,
        link:"/UserDashboard/Profile"
    },
    {
        title:"Logout",
        icon:<LogoutIcon/>,
        link:"/UserDashboard/logout"
    },


]

 export default sidebarData



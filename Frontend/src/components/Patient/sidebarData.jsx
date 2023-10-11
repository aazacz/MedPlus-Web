import React from "react"
import AppsIcon from '@mui/icons-material/Apps';

import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PersonPinIcon from '@mui/icons-material/PersonPin';


const sidebarData=[

    {
        title:"Overview",
        icon:<AppsIcon/>,
        link:"/UserDashboard",
        first:true
    },
    // {
    //     title:"Lab Result",
    //     icon:<BiotechIcon/>,
    //     link:"/UserDashboard/labresult"
    // },
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
    


]

 export default sidebarData



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
        link:"/Overview"
    },
    {
        title:"Lab Result",
        icon:<BiotechIcon/>,
        link:"/labresult"
    },
    {
        title:"Previous Consultations",
        icon:<AssignmentIcon/>,
        link:"/previous"
    },
    {
        title:"Book New Consultation ",
        icon:<NoteAddIcon/>,
        link:"/newconsultation"
    },
    {
        title:"Profile",
        icon:<PersonPinIcon/>,
        link:"/Profile"
    },
    {
        title:"Logout",
        icon:<LogoutIcon/>,
        link:"/logout"
    },


]

 export default sidebarData



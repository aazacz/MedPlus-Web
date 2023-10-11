import { configureStore } from "@reduxjs/toolkit";
import { loginsliceReducer } from "./userSlice";
import { AdminloginsliceReducer } from "./adminSlice";
import { screensizeReducer } from "./userSlice";

export default configureStore({

reducer:{
        login: loginsliceReducer,
        screen:screensizeReducer,
        admin:AdminloginsliceReducer,
        }

})


 


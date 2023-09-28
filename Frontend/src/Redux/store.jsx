import { configureStore } from "@reduxjs/toolkit";
import { loginsliceReducer } from "./userSlice";

export default configureStore({
reducer:{
        // userlist:userSliceReducer,
        login:loginsliceReducer
}


})


 


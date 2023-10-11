import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



//slice for login purpose
export const Adminloginslice = createSlice({
  name: "loginUser",
  initialState: {
    name: "",
    email: "",
    login: false,
    token: "",

  },
  reducers: {
    loginAdmin: (state, action) => {
    
      const { name, email, login, token,otp,image } = action.payload;
      console.log(name, email, login, token );
      return {
        ...state,
        name: name,
        email: email,
        login: login,
        token: token,
    
        otp:otp
      };
    },
    updateUserData: (state, action) => {
      // Merge the updated fields into the state
      return {
        ...state,
        ...action.payload,
      };
    }
  },


})

export const screensizeSlice = createSlice({
  name: "screensize",
  initialState: [],
  reducers: {
    size: (state, action) => {
        return {
        ...state,
        size: action.payload.size,
      }
    }
  }
})



export const { updateUserData } = Adminloginslice.actions;
export const { loginAdmin } = Adminloginslice.actions;
export const AdminloginsliceReducer = Adminloginslice.reducer;

export const { size } = screensizeSlice.actions;
export const screensizeReducer = screensizeSlice.reducer 
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import rdvSlice from "./rdvSlice";
export default configureStore({
    reducer:{
        RDV:rdvSlice,
        User:userSlice
     } 
})
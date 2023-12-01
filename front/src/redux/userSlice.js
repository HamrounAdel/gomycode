import { createSlice } from "@reduxjs/toolkit";
const userSlice =createSlice({
    name:'User',
    initialState:([
    { 
        name:"",
        lastName:"",
        email:"",
        password:"",
        adress:"",
        phone:"",
        role:"",
        specialite:"",
        numOrder:""


    },
  
]),
reducers:{
setUser:(state,action)=>{
 return  action.payload

}
}
})
export const  {setUser}=userSlice.actions;
export default userSlice.reducer
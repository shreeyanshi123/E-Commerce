import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { act } from 'react';

const initialState = {
  isAuthenticated: false,
  isLoading:true,
  user: null,
}

export const registerUser=createAsyncThunk(
  "/auth/register",
  async(formData)=>{
    const response=await axios.post(
      "http://localhost:5000/api/auth/register",
      formData,
      {
        withCredentials:true,
      }
    );
    return response.data;
  }
)


export const loginUser=createAsyncThunk(
  "/auth/login",
  async(formData)=>{
    const response=await axios.post(
      "http://localhost:5000/api/auth/login",
      formData,
      {
        withCredentials:true,
      }
    );
    return response.data;
  }
)



const authSlice=createSlice({
  name:'auth',
  initialState,
  reducers:{
    setUser:(state,action)=>{}
  },
  extraReducers:(builder)=>{
    builder.addCase(registerUser.pending,(state)=>{
      state.isLoading=true;
    }).addCase(registerUser.fulfilled,(state,action)=>{
      state.isLoading=false;
      state.user=null;
      state.isAuthenticated=false;
    }).addCase(registerUser.rejected,(state,action)=>{
      state.isLoading=false;
      state.user=null;
      state.isAuthenticated=false;
    }).addCase(loginUser.pending,(state)=>{
      state.isLoading=true;
    }).addCase(loginUser.rejected,(state)=>{
      state.isAuthenticated=false;
      state.isLoading=false;
      state.user=null;
    }).addCase(loginUser.fulfilled,(state)=>{
      state.isAuthenticated=action.payload.success;
      state.isLoading=false;
      state.user=action.payload.success?action.payload.user:null;
    })
  }
})

export const {setUser}=authSlice.actions;
export default authSlice.reducer;
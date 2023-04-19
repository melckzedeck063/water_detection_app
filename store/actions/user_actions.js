

import { createAsyncThunk } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

import axios from 'axios'
import { AUTH_URL, BASE_URL } from '../URL';

export const signInUser  = createAsyncThunk(`/login`, async(values)  =>  {
     try{
        console.log(values)
           const  response =   await axios.post(`${AUTH_URL}/login`, {
            email :  values.username,
            password :   values.password
           })

           await SecureStore.setItemAsync('token', JSON.stringify(response.data));
         //   console.log(response.data)
          return response.data 
     }
     catch(error){
        console.log(error)
        return error.message
     }
})

export const signUpUser =  createAsyncThunk('/signup', async (values) => {
    try{
      console.log(values)
         const response =  await axios.post(`${AUTH_URL}/signup`, {
            firstName  :  values.firstName,
            lastName :   values.lastName,
            email : values.username,
            telephone :   values.telephone,
            password :  values.password,
            confirmPassword  :  values.confirmPassword
         })
         await SecureStore.setItemAsync('token', JSON.stringify(response.data));
         console.log(response.data)
         return response.data
    }
    catch(error) {
      console.log(error)
        return error.message
    }
})
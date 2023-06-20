import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../URL";


export const sendSignal = createAsyncThunk('new/signal', async(values) => {
    // console.log(values)
    try{
        const response = await axios.post(`${BASE_URL}/signal/new_signal`, {
            temperature : values.temperature,
            turbidity : values.turbidity,
            water_level : values.water_level,
            PH : values.PH,
            purity :  values.purity
        })
        // console.log(response.data);
        return response.data
    }
    catch(error){
        console.log(error);
        return error.response.message
    }
})

export const getSignal = createAsyncThunk ('get/signal', async() => {
    console.log("called function")
    try{
        const response  =  await axios.get(`${BASE_URL}/signal/current_signal?sort=-_id&limit=1`);

        // console.log(response.data);
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
})

export const getAllSignals = createAsyncThunk ('all/signal', async() => {
    try{
        const response  =  await BASE_URL.get('/signal/all_signal');

        console.log(response.data);
        return response.data
    }
    catch(error){
        console.log(error);
        return error.message
    }
})
import { createSlice } from "@reduxjs/toolkit";
import { getAllSignals, getSignal, sendSignal } from "../actions/signal_actions";


const SignalSlice = createSlice ({
    name :  'signal',
    initialState :  {
        signals : [],
        current_signal : null,
        new_signal : null,
        status :  '',
        error  :  null
    },

    reducers : {
        signUp : (state, action) => {
            state.users.push(action.payload)
        },
        signIn :  (state,action) => {
            state.current_signal =  action.payload
        },
        allUsers : (state, action) => {
             state.users.push(action.payload)
        }
    },
    extraReducers  (builder) {
        builder
        .addCase(sendSignal.pending, (state, action)=>{
             state.status = "Loading"
        })
        .addCase(sendSignal.fulfilled, (state, action) => {
            state.status = "Success",
            state.new_signal = action.payload
        })
        .addCase(sendSignal.rejected, (state, action) => {
            state.status  = "Failed",
            state.error = action.error.message
        })
        .addCase(getSignal.pending, (state, action)=>{
            state.status = "Loading"
       })
       .addCase(getSignal.fulfilled, (state, action) => {
           state.status = "Success",
           state.current_signal = action.payload
       })
       .addCase(getSignal.rejected, (state, action) => {
           state.status  = "Failed",
           state.error = action.error.message
       })
       .addCase(getAllSignals.pending, (state, action)=>{
        state.status = "Loading"
   })
   .addCase(getAllSignals.fulfilled, (state, action) => {
       state.status = "Success",
       state.signals = action.payload
   })
   .addCase(getAllSignals.rejected, (state, action) => {
       state.status  = "Failed",
       state.error = action.error.message
   })
    }
})

export const {signIn,signUp}  = SignalSlice.actions;

export default  SignalSlice.reducer
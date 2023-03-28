import {createSlice} from '@reduxjs/toolkit'
import { signInUser, signUpUser } from '../actions/user_actions'


const userSlice =  createSlice({
    name :  'Users',
    initialState :  {
        users : [],
        logedUser : null,
        status :  '',
        error  :  null
    },

    reducers : {
        signUp : (state, action) => {
            state.users.push(action.payload)
        },
        signIn :  (state,action) => {
            state.logedUser =  action.payload
        },
        allUsers : (state, action) => {
             state.users.push(action.payload)
        }
    },
    extraReducers  (builder) {
        builder
        .addCase(signInUser.pending, (state, action)=>{
             state.status = "Loading"
        })
        .addCase(signInUser.fulfilled, (state, action) => {
            state.status = "Success",
            state.logedUser = action.payload
        })
        .addCase(signInUser.rejected, (state, action) => {
            state.status  = "Failed",
            state.error = action.error.message
        })
        .addCase(signUpUser.pending, (state, action)=>{
            state.status = "Loading"
       })
       .addCase(signUpUser.fulfilled, (state, action) => {
           state.status = "Success",
           state.users = action.payload
       })
       .addCase(signUpUser.rejected, (state, action) => {
           state.status  = "Failed",
           state.error = action.error.message
       })
    }
})

export const {signIn, signUp, allUsers}  =  userSlice.actions;

export default userSlice.reducer
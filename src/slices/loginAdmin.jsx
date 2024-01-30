import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

export const LoginAdminSlice = createSlice({
    name:"loginAdmin",
    initialState,
    reducers:{
        setTokenAdmin:(state , action )=> {
            state.token = action.payload
            action.payload && localStorage.setItem("adminToken" , action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const {setTokenAdmin} =  LoginAdminSlice.actions

// Corrected selector to access loginAdmin
export const selectLoginAdmin = (state) => state.loginAdmin.token

export default LoginAdminSlice.reducer
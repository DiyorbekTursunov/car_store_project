import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      localStorage.setItem("token" , action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = loginSlice.actions

// Corrected selector to access pathName
export const selectLogin = (state) => state.login.token

export default loginSlice.reducer

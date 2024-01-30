import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../slices/login'
import LoginAdmin from '../slices/loginAdmin'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    loginAdmin: LoginAdmin,
  },
})
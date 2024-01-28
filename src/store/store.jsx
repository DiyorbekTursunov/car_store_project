import { configureStore } from '@reduxjs/toolkit'
import slugSlice from '../slices/slug-slice'

export const store = configureStore({
  reducer: {
    slug: slugSlice
  },
})
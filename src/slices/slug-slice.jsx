import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pathName: null,
}

export const slugSlice = createSlice({
  name: 'slug',
  initialState,
  reducers: {
    slugChanged: (state, action) => {
      // bu model path uchun slice
      state.pathName = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { slugChanged } = slugSlice.actions

// Corrected selector to access pathName
export const selectSlug = (state) => state.slug.pathName

export default slugSlice.reducer

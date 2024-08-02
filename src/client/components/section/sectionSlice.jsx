import { createSlice } from '@reduxjs/toolkit'

const sectionSlice = createSlice({
  name: 'section',
  initialState: {
    darkTheme: false,
    selectedNav: true,
  },
  reducers: {
    tootgleTheme: ((state) => {
        state.darkTheme = !state.darkTheme;
    })
  }
})

export const { tootgleTheme } = sectionSlice.actions
export default sectionSlice.reducer;
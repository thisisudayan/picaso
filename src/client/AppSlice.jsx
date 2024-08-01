import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    desktopMode: true,
  },
  reducers: {
    isDesktopMode: ((state,action) => {
        state.desktopMode = action.payload;
        console.log(state.desktopMode)
    })
  }
})

export const { isDesktopMode } = appSlice.actions
export default appSlice.reducer;
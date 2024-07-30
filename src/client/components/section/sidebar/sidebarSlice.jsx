import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    conversationKey:null
  },
  reducers: {
    selectConversation: ((state,action) => {
        state.conversationKey = action.payload
    })
  }
})

export const { selectConversation} = sidebarSlice.actions
export default sidebarSlice.reducer;
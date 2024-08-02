import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    conversationKey: null,
    conversations: [],
    responseImageQuantity:1,
    toggleNav:false
  },
  reducers: {
    selectConversation: ((state, action) => {
      state.conversationKey = action.payload
    }),
    setConversation: ((state, action) => {
      if (action.payload.isNew) {
        state.conversations = [...state.conversations,action.payload.data];
        state.conversationKey = action.payload.data._id
      } else {
        state.conversations = state.conversations.map((item) => {
          if(item._id == action.payload.data._id) {
            return action.payload.data
          } else {
            return item
          }
        })
      }
    }),
    setResponseImageQuantity:((state,action)=>{
      state.responseImageQuantity = action.payload
    }),
    setToggleNav:((state,action)=>{
      state.toggleNav=!state.toggleNav
    })
  }
})

export const { selectConversation, setConversation,setResponseImageQuantity,setToggleNav } = sidebarSlice.actions
export default sidebarSlice.reducer;
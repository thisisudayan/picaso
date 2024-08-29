import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    conversationKey: null,
    conversations: [],
    responseImageQuantity:1,
    toggleNav:3
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
    setAllConversations:((state,action)=>{
      state.conversations = action.payload
    }),
    setResponseImageQuantity:((state,action)=>{
      state.responseImageQuantity = action.payload
    }),
    setToggleNav:((state,action)=>{
      state.toggleNav=  action.payload
    })
  }
})

export const { selectConversation, setConversation,setResponseImageQuantity,setToggleNav,setAllConversations } = sidebarSlice.actions
export default sidebarSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    conversationKey:null,
    conversations:[
      {
        id:'dfgfhg',
        title:"Create a beautiful potrait",
        messages: [
          {
            id:'sfadagag',
            attachments:[
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
            ],
            question: false,
            body: 'Hello World'
          }
        ]
      }
    ]
  },
  reducers: {
    selectConversation: ((state,action) => {
        state.conversationKey = action.payload
    }),
    setConversation: ((state, action) => {
      console.log(action.payload.id)
      console.log(state.conversations[0].id)
      state.conversations = state.conversations.filter((item) => {
        return item.id === action.payload.id

      })
     
    })
  }
})

export const { selectConversation,setConversation} = sidebarSlice.actions
export default sidebarSlice.reducer;
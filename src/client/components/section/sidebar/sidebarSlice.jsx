import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    conversationKey: null,
    conversations: [
      {
        id: 'dfgfhg',
        title: "Create a beautiful potrait",
        messages: [
          {
            id: 'eig840d',
            attachments: [],
            question: true,
            body: 'generate some picture related to nature'
          },
          {
            id: '346jsd6',
            attachments: [
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",
              "https://picsum.photos/200/300",

            ],
            question: false,
            body: 'here are some nature related pictures for you'
          }
        ]
      }
    ]
  },
  reducers: {
    selectConversation: ((state, action) => {
      state.conversationKey = action.payload
    }),
    setConversation: ((state, action) => {
      state.conversations = state.conversations.filter((item) => {
        return item.id === action.payload.id

      })

    })
  }
})

export const { selectConversation, setConversation } = sidebarSlice.actions
export default sidebarSlice.reducer;
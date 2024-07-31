import mongoose from 'mongoose';


// {
//   id:'dfgfhg',
//   title:"Create a beautiful potrait",
//   messages: [
//     {
//       id:'sfadagag',
//       attachments:[
//         "https://picsum.photos/200/300",
//         "https://picsum.photos/200/300",
//         "https://picsum.photos/200/300",
//         "https://picsum.photos/200/300",
//         "https://picsum.photos/200/300",
//       ],
//       question: false,
//       body: 'Hello World'
//     }
//   ]
// }

const messageSchema = new mongoose.Schema({
  question: {
    type: Boolean,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  attachments: {
    type: [String],
    required: false,
  }
})


const conversationSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: 'Imagine'
  },
  messages: {
    type: [messageSchema],
    required: true
  }
});


// Create Model
const ConversationModel = mongoose.model('conversation', conversationSchema);

// Export Model
export { ConversationModel };
import mongoose from 'mongoose';

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
    required: false,
  },
  title: {
    type: String,
    required: false,
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
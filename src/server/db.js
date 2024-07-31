import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://picasobd:RvaTNRwP5RlAtvKQ@cluster0.1oaa6jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});

export { mongoose };
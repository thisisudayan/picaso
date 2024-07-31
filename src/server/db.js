import mongoose from "mongoose";

const MONGODB_URI = 'mongodb://localhost:27017/picaso';

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});

export { mongoose };
import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  chat: [{ username: String, message: String }],
});

export const chatModel = mongoose.model('Chat', chatSchema);

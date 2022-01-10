import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const agent = new Schema({
  id: { type: Number, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const Agent = model('agent', agent);
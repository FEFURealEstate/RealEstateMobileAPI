import { Schema, model } from 'mongoose';


const agent = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export const Agent = model('agent', agent);
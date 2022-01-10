import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const event = new Schema({
  agentId: { type: Number, required: true },
  datetime: { type: Number, required: true },
  date: { type: String },
  duration: { type: Number, default: null },
  type: { type: String, required: true },
  comment: { type: String, required: true }
})

export const Event = model("event", event);
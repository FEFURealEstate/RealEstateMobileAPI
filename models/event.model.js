import { Schema, model } from 'mongoose';

const event = new Schema({
  agentId: { type: Schema.Types.ObjectId, ref="agent", required: true },
  datetime: { type: Number, required: true },
  date: { type: String },
  duration: { type: Number, default: null },
  type: { type: String, required: true },
  comment: { type: String, required: true }
})

export const Event = model("event", event);
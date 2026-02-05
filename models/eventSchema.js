import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  interested_ids: {
    type: Array,
    default: [],
  },
  going_ids: {
    type: Array,
    default: [],
    swags: {
      type: Array,
      default: [],
    },
  },
});

export const eventModel =
  mongoose.models.events ?? mongoose.model("events", eventSchema);

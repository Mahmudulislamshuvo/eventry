import { eventModel } from "@/models/eventSchema";
import { userModel } from "@/models/userSchema";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import mongoose from "mongoose";
import { unstable_cache } from "next/cache";

const getAllEvents = unstable_cache(
  async () => {
    const allEvents = await eventModel.find().lean();
    return replaceMongoIdInArray(allEvents);
  },
  ["all-events"],
  { tags: ["events"] },
);

const getEventById = unstable_cache(
  async (eventId) => {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
  },
  ["event-by-id"],
  { tags: ["events"] },
);

const createUser = async (userData) => {
  return await userModel.create(userData);
};

const loginUser = async (credenTials) => {
  const { email, password } = credenTials;
  const user = await userModel.findOne({ email }).lean();

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  if (user) {
    return replaceMongoIdInObject(user);
  }

  return null;
};

const updateEventInterest = async (eventId, userId) => {
  const event = await eventModel.findById(eventId);

  if (event) {
    const foundUsers = event.interested_ids.find(
      (id) => id.toString() === userId,
    );

    if (foundUsers) {
      event.interested_ids.pull(new mongoose.Types.ObjectId(userId));
    } else {
      event.interested_ids.push(new mongoose.Types.ObjectId(userId));
    }

    await event.save();
  }
};

const updateEventGoing = async (eventId, user) => {
  const event = await eventModel.findById(eventId);

  event.going_ids.push(new mongoose.Types.ObjectId(user?.id));

  await event.save();
};

export {
  getAllEvents,
  getEventById,
  createUser,
  loginUser,
  updateEventInterest,
  updateEventGoing,
};

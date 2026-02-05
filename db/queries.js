import { eventModel } from "@/models/eventSchema";
import { userModel } from "@/models/userSchema";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}

async function getEventById(eventId) {
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
}

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
};

export { getAllEvents, getEventById, createUser, loginUser };

import { eventModel } from "@/models/eventSchema";
import { replaceMongoIdInArray } from "@/utils/data-utils";

async function getAllEvents() {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
}

// async function getEventById(eventId) {
//   const event = await eventModel.findById(eventId).lean();
//   return replaceMongoIdInObject(event);
// }

// export { getAllEvents, getEventById };
export { getAllEvents };

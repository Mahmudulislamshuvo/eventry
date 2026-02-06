import { getAllEvents } from "@/db/queries";
import EventCard from "./EventCard";

const EventList = async ({ query }) => {
  const events = await getAllEvents(query);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;

import Image from "next/image";
import Link from "next/link";
import ActionButtons from "../ActionButtons";
import formatArrayLength from "@/utils/formatArrayLength";
import EventSchemaScript from "../meta/event-Schema";
import { getBlurData } from "@/utils/blue-genaratedImage";

const EventCard = async ({ event }) => {
  const { base64 } = await getBlurData(event.imageUrl);
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <EventSchemaScript event={event} />
      <Image
        src={event.imageUrl}
        alt={event.name}
        className="w-full"
        width={500}
        height={500}
        placeholder="blur"
        blurDataURL={base64}
      />

      <div className="p-3">
        <Link href={`/details/${event.id}`} className="font-bold text-lg">
          {event.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{formatArrayLength(event.interested_ids)} Interested</span>
          <span>|</span>
          <span>{formatArrayLength(event.going_ids)} Going</span>
        </div>
        <ActionButtons
          eventId={event?.id}
          interestedUserIds={event?.interested_ids}
          goingUserIds={event?.going_ids}
        />
      </div>
    </div>
  );
};

export default EventCard;

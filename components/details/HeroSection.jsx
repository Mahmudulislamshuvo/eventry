import Image from "next/image";
import ActionButtons from "../ActionButtons";
import formatArrayLength from "@/lib/formatArrayLength";

const HeroSection = async ({ eventInfo }) => {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={eventInfo.imageUrl}
          alt={eventInfo.name}
          className="h-[450px] mx-auto"
          width={900}
          height={900}
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{eventInfo.name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{eventInfo.location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>
              {formatArrayLength(eventInfo.interestedCount)} Interested
            </span>
            <span>|</span>
            <span>{formatArrayLength(eventInfo.goingCount)} Going</span>
          </div>
        </div>

        <ActionButtons fromDetails={true} />
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import { addiInterestedEvent } from "@/actions";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Spinner from "./common/Spinner";

const ActionButtons = ({
  eventId,
  interestedUserIds,
  goingUserIds,
  fromDetails,
}) => {
  const [interested, setInterested] = useState(false);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const { auth } = useAuth();

  const isInterested = interestedUserIds?.find((id) => id === auth?.id);
  const isGoing = goingUserIds?.find((id) => id === auth?.id);
  const [going, setGoing] = useState(isGoing);

  const toggleInterest = async () => {
    if (auth) {
      await addiInterestedEvent(eventId, auth.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  };

  const markGoing = () => {
    if (auth) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push(`/login`);
    }
  };

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        disabled={isPending}
        className={`w-full ${isInterested && "bg-indigo-600"} hover:bg-indigo-800  ${isPending && "bg-gray-500"}`}
        onClick={() =>
          startTransition(() => {
            toggleInterest();
          })
        }
      >
        Interested {isPending && <Spinner />}
      </button>
      <button
        disabled={auth && going}
        onClick={markGoing}
        className={`text-center w-full py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm
    ${
      going
        ? "bg-green-600 cursor-default pointer-events-none"
        : "bg-[#464849] hover:bg-[#3C3D3D] cursor-pointer transition-colors active:translate-y-1"
    }
  `}
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;

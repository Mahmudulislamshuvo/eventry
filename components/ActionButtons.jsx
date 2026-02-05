"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";

const ActionButtons = ({ eventId, interestedUserIds, fromDetails }) => {
  const [interested, setInterested] = useState(false);
  const { auth } = useAuth();

  const isInterested = interestedUserIds?.find((id) => id === auth?.id);

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        className={`w-full ${isInterested ? "bg-indigo-600" : ""} hover:bg-indigo-800`}
        onClick={() => setInterested(!interested)}
      >
        Interested
      </button>
      <Link
        href="/payment"
        className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </Link>
    </div>
  );
};

export default ActionButtons;

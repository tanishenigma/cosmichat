import Image from "next/image";
import React from "react";
import { LucideEllipsis, Video, SquarePen } from "lucide-react";

const UserInfo = () => {
  return (
    <div className="flex gap-x-35 justify-start items-center">
      <div className="flex  items-center gap-x-2.5">
        <Image
          className="object-cover border-zinc-400 border-2 rounded-full"
          src="https://placehold.co/50x50/png/"
          width={50}
          height={50}
          alt="UserImage"
        />
        <h2 className="text-xl font-bold">Krsna</h2>
      </div>
      <div className="flex gap-5">
        <LucideEllipsis className="cursor-pointer" />
        <Video className="cursor-pointer" />
        <SquarePen className="cursor-pointer" />
      </div>
    </div>
  );
};

export default UserInfo;

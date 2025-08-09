import React from "react";
import Image from "next/image";
import {
  ArrowUp,
  BellOff,
  ChevronDown,
  ChevronUp,
  Download,
  UserX,
} from "lucide-react";
const Detail = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      {/* {USERINFO} */}
      <div className="flex flex-col justify-center items-center gap-x-2  border-b border-b-zinc-600 pb-10">
        <Image
          className="object-cover border-zinc-400/50 border-2 rounded-full"
          src="https://placehold.co/100x100/png/"
          width={100}
          height={100}
          alt="UserImage"
        />
        <div className="text-center gap-5 mt-5">
          <h1 className="text-xl font-black">Arjuna</h1>
          <span className="text-sm text-zinc-500">
            Lorem ipsum, dolor sit amet
          </span>
        </div>{" "}
        <div className="flex">
          <div className="flex gap-x-2 relative cursor-pointer bg-red-500/20 transition-colors duration-200 ease-in-out hover:bg-red-500/50 rounded-md p-2 px-15 m-2 ">
            <UserX />
            <button className="">Block User</button>
          </div>
          <div className="flex gap-x-2 relative cursor-pointer bg-yellow-500/20 transition-colors duration-200 ease-in-out hover:bg-yellow-500/50 rounded-md p-2 px-10 m-2 ">
            <BellOff />
            <button className="">Mute</button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {/* {DETAILS} */}
        <div className="flex flex-col">
          {/* {CHATOPTIONS} */}
          <div className="flex justify-between items-center m-5">
            <span className="font-semibold">Chat Settings</span>
            <div className=" bg-zinc-600 rounded-full p-1 transition-transform duration-300 ease-in-out hover:rotate-180 cursor-pointer">
              <ChevronUp />
            </div>
          </div>
          <div className="flex justify-between items-center m-5">
            <span className="font-semibold">Report</span>
            <div className=" bg-zinc-600 rounded-full p-1 transition-transform duration-300 ease-in-out hover:rotate-180 cursor-pointer">
              <ChevronUp />
            </div>
          </div>
          <div className="flex justify-between items-center m-5">
            <span className="font-semibold">Help</span>
            <div className=" bg-zinc-600 rounded-full p-1 transition-transform duration-300 ease-in-out hover:rotate-180 cursor-pointer">
              <ChevronUp />
            </div>
          </div>
          {/* {SharedPHOTOS} */}
          <div className="flex flex-col justify-between m-5">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Shared Photos</span>
              <div className=" bg-zinc-600 rounded-full p-1 transition-transform duration-300 ease-in-out hover:rotate-180 cursor-pointer">
                <ChevronDown />
              </div>
            </div>
            <div className="m-2 flex items-center gap-x-5 mt-5">
              <Image
                className="rounded-lg"
                src={"https://picsum.photos/100"}
                width={50}
                height={50}
                alt="shared-photo"
              />
              <span className="font-mono text-sm">Photo_2034.png</span>
              <Download className="ml-18 cursor-pointer text-zinc-400 hover:text-white duration-300 ease-in-out" />
            </div>

            <div className="m-2 flex items-center gap-x-5 mt-5">
              <Image
                className="rounded-lg"
                src={"https://picsum.photos/100"}
                width={50}
                height={50}
                alt="shared-photo"
              />
              <span className="font-mono text-sm">Photo_2034.png</span>
              <Download className="ml-18 cursor-pointer text-zinc-400 hover:text-white duration-300 ease-in-out" />
            </div>

            <div className="m-2 flex items-center gap-x-5 mt-5">
              <Image
                className="rounded-lg"
                src={"https://picsum.photos/100"}
                width={50}
                height={50}
                alt="shared-photo"
              />
              <span className="font-mono text-sm">Photo_2034.png</span>
              <Download className="ml-18 cursor-pointer text-zinc-400 hover:text-white duration-300 ease-in-out" />
            </div>
          </div>
          {/* {Shared Files} */}
          <div className="flex flex-col justify-between m-5">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Shared Files</span>
              <div className=" bg-zinc-600 rounded-full p-1 transition-transform duration-300 ease-in-out hover:rotate-180 cursor-pointer">
                <ChevronDown />
              </div>
            </div>
            <div className="m-2 flex items-center gap-x-5 mt-5">
              <Image
                className="rounded-lg"
                src={"https://picsum.photos/100"}
                width={50}
                height={50}
                alt="shared-photo"
              />
              <span className="font-mono text-sm">Photo_2034.png</span>
              <Download className="ml-18 cursor-pointer text-zinc-400 hover:text-white duration-300 ease-in-out" />
            </div>
          </div>
        </div>
      </div>

      {/* {Logout} */}

      <div className="flex justify-center">
        {" "}
        <button className="relative cursor-pointer bg-sky-500/20 transition-colors duration-200 ease-in-out hover:bg-sky-500/50 rounded-md p-2 px-8  m-2">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Detail;

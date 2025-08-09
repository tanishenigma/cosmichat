"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Video,
  Info,
  Phone,
  SmilePlus,
  SendHorizonal,
  ImageIcon,
  Mic,
  Camera,
} from "lucide-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const Chat = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [typing, SetTyping] = useState(true);
  const [message, setMessage] = useState("");

  const endRef = useRef(null);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji.native);
  };
  return (
    <div className="flex flex-[2] flex-col border-x  border-x-zinc-700">
      {/* InfoSection */}
      <div className="flex justify-between items-center px-5 pb-2 border-b border-b-zinc-700">
        <div className="flex items-center gap-x-2">
          <Image
            className="object-cover border-zinc-400 border-2 rounded-full"
            src="https://placehold.co/50x50/png/"
            width={50}
            height={50}
            alt="UserImage"
          />
          <div>
            <h1 className="text-xl font-black">Arjuna</h1>
            <span className="text-sm text-zinc-500">
              Lorem ipsum, dolor sit amet
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5">
            <Phone className=" cursor-pointer" />
            <Video className="cursor-pointer" />
            <Info className="cursor-pointer" />
          </div>
        </div>
      </div>
      {/* {Display Chats} */}
      <div className="p-5 flex  flex-col overflow-scroll hide-scrollbar gap-5 ">
        {/* {OwnerChat} */}
        <div className="flex justify-end">
          <div className="max-w-96">
            <div className="texts ">
              <p className=" bg-sky-500 rounded-xl p-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                optio hic debitis, eum placeat porro perferendis omnis quo vel,
                eveniet commodi non eius molestias aperiam, ipsam sapiente.
                Repudiandae, nostrum iste.
              </p>
              <span className="text-xs text-zinc-500 text-right block mt-1">
                1 min ago
              </span>
            </div>
          </div>
        </div>
        {/* {Chat} */}
        <div className="flex">
          <div className="flex gap-3 max-w-96 ">
            <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-full">
              <Image
                className="object-cover border-zinc-400 border-2 "
                src="https://picsum.photos/100"
                width={100}
                height={100}
                alt="UserImage"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <p className="bg-zinc-500 rounded-xl p-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                optio hic debitis, eum placeat porro perferendis omnis quo vel,
                eveniet commodi non eius molestias aperiam, ipsam sapiente.
                Repudiandae, nostrum iste.
              </p>
              <span className=" text-xs mt-1 text-zinc-500 ">1 min ago</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 max-w-96 ">
          <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="object-cover border-zinc-400 border-2 "
              src="https://picsum.photos/100"
              width={100}
              height={100}
              alt="UserImage"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <p className="bg-zinc-500 rounded-xl p-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              optio hic debitis, eum placeat porro perferendis omnis quo vel,
              eveniet commodi non eius molestias aperiam, ipsam sapiente.
              Repudiandae, nostrum iste.
            </p>
            <span className=" text-xs mt-1 text-zinc-500 ">1 min ago</span>
          </div>
        </div>
        {/* {OwnerChat} */}
        <div className="flex justify-end">
          <div className="max-w-96">
            <div className="texts ">
              <p className=" bg-sky-500 rounded-xl p-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                optio hic debitis, eum placeat porro perferendis omnis quo vel,
                eveniet commodi non eius molestias aperiam, ipsam sapiente.
                Repudiandae, nostrum iste.
              </p>
              <span className="text-xs text-zinc-500 text-right block mt-1">
                1 min ago
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 max-w-96 ">
          <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-full">
            <Image
              className="object-cover border-zinc-400 border-2 "
              src="https://picsum.photos/100"
              width={100}
              height={100}
              alt="UserImage"
            />
          </div>

          <div className="flex flex-1 flex-col">
            <p className="bg-zinc-500 rounded-xl p-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              optio hic debitis, eum placeat porro perferendis omnis quo vel,
              eveniet commodi non eius molestias aperiam, ipsam sapiente.
              Repudiandae, nostrum iste.☺️☺️
            </p>
            <span className=" text-xs mt-1 text-zinc-500 ">1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      {/* Input Section */}
      <div className="flex items-center justify-between px-5 mt-auto cursor-pointer">
        <div className="flex gap-x-2  items-center">
          <ImageIcon className="" />
          <Camera className="" />
          <Mic className="" />
        </div>
        <div className="flex-1 items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-zinc-700 rounded-xl p-2 text-zinc-400 border-none outline-none focus:outline-none"
            placeholder="Type a message"
          />
        </div>
        <div className="flex gap-x-2 items-center cursor-pointer">
          <div className="p-2 relative ">
            <SmilePlus
              onClick={() => {
                setShowPicker((prev) => !prev);
              }}
            />

            {showPicker && (
              <div className="absolute z-50 bottom-14 right-0 left-0 ">
                <Picker
                  data={data}
                  onEmojiSelect={handleEmojiSelect}
                  theme="auto"
                />
              </div>
            )}
          </div>{" "}
          {typing ? (
            <div className="bg-sky-500 rounded-full p-2">
              <SendHorizonal />
            </div>
          ) : (
            <div className=" rounded-full p-2">
              <SendHorizonal />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;

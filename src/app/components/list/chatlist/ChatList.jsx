"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { doc, onSnapshot } from "firebase/firestore";

import { Search, Plus } from "lucide-react";
import AddUser from "@/app/components/addUser/AddUser";
import { useUserStore } from "@/lib/userStore";
import { db } from "@/lib/firebase";

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const { currentUser } = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), (doc) => {
      setChats(doc.data());
    });
    return () => {
      unSub();
    };
  }, [currentUser.id]);

  return (
    <div className="flex flex-1 flex-col overflow-scroll hide-scrollbar">
      <div className="mt-5">
        <div className="flex bg-zinc-700 rounded-xl p-2 gap-x-3 items-center text-zinc-400">
          <Search className="" />
          <input
            type="text"
            className=" border-none outline-none pr-5 bg-transparent"
            placeholder="Search"
          />
          {addMode ? (
            <Plus
              className="cursor-pointer rotate-45  transition-transform"
              onClick={() => setAddMode((prev) => !prev)}
            />
          ) : (
            <Plus
              className="cursor-pointer  "
              onClick={() => setAddMode((prev) => !prev)}
            />
          )}
        </div>
      </div>
      <div className="flex cursor-pointer mt-5 items-center border-b border-b-zinc-700 pb-3">
        <Image
          className="object-cover border-zinc-400 border-2 rounded-full"
          src="https://placehold.co/50x50/png/"
          width={50}
          height={50}
          alt="UserImage"
        />
        <div className="pl-5">
          {" "}
          <span className="font-bold">Arjuna</span>
          <p className="text-zinc-400">Hello</p>
        </div>
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;

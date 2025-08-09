import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const AddUser = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow-sm">
      <div className="bg-zinc-800/50 p-6 rounded-lg  backdrop-blur-3xl shadow-md w-96 ">
        <form className="space-y-4">
          <input
            className="w-full bg-zinc-700/50 p-3 rounded-lg border border-zinc-600 focus:outline-none "
            type="text"
            placeholder="username"
            name="username"
          />
          <Button className="w-full bg-zinc-700 hover:bg-zinc-800">
            Search
          </Button>
        </form>
        <div className="mt-4">
          <div className="flex justify-center rounded-full">
            <Image
              src="https://placehold.co/100x100/png/"
              width={100}
              height={100}
              alt="userImage"
              className="rounded-full object-cover border border-white/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

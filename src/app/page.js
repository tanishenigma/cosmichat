import Chat from "@/app/components/chat/Chat";
import Detail from "@/app/components/detail/Detail";
import List from "@/app/components/list/List";
import Login from "@/app/components/Login/Login";
import SignUp from "@/app/components/Login/SignUp";
import Image from "next/image";

export default function Home() {
  const user = 0;
  return (
    <>
      {user ? (
        <div className="container flex ">
          <div className="flex justify-between m-4 items-stretch w-full">
            <List />
            <Chat />
            <Detail />
          </div>
        </div>
      ) : (
        <div className="flex ">
          <div className="relative z-10">
            <Login />
          </div>
        </div>
      )}
    </>
  );
}

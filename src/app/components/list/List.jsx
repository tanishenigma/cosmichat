import ChatList from "@/app/components/list/chatlist/ChatList";
import UserInfo from "@/app/components/list/userinfo/UserInfo";
import React from "react";
const List = () => {
  return (
    <div className="flex-1 pr-5 ">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;

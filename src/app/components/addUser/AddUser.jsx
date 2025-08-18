import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useUserStore } from "@/lib/userStore";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    setUser(null);
    setNotFound(false);
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        const docSnap = querySnapShot.docs[0];
        const foundUser = { ...docSnap.data(), id: docSnap.id };
        setUser(foundUser);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.log(err);
      setNotFound(true);
    }
  };

  const handleAdd = async () => {
    if (!user || !currentUser || user.id === currentUser.id) return;
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
      setUser(null); // Optionally clear after adding
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 shadow-sm">
      <div className="bg-zinc-800/50 p-6 rounded-lg backdrop-blur-3xl shadow-md w-96">
        <form className="space-y-4" onSubmit={handleSearch}>
          <input
            className="w-full bg-zinc-700/50 p-3 rounded-lg border border-zinc-600 focus:outline-none"
            type="text"
            placeholder="username"
            name="username"
            autoComplete="off"
          />
          <Button
            className="w-full bg-zinc-700 hover:bg-zinc-800"
            type="submit">
            Search
          </Button>
        </form>
        {notFound && (
          <div className="mt-4 text-center text-red-400">User not found.</div>
        )}
        {user && (
          <div className="mt-4">
            <div className="flex justify-center rounded-full">
              <span>{user.username}</span>
            </div>
            {user.id === currentUser.id ? (
              <div className="text-sm text-yellow-400 mt-2">
                You can't add yourself.
              </div>
            ) : (
              <Button className="mt-2 w-full" onClick={handleAdd}>
                Add User
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;

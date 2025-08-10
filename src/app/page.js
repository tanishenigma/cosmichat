"use client";
import Chat from "@/app/components/chat/Chat";
import Detail from "@/app/components/detail/Detail";
import List from "@/app/components/list/List";
import Login from "@/app/signin/page";
import SignUp from "@/app/signup/page";
import { Progress } from "@/components/ui/progress";
import { auth } from "@/lib/firebase";
import { useUserStore } from "@/lib/userStore";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev; // Don't go to 100% until actually loaded
          return prev + Math.random() * 15; // Random increment
        });
      }, 200);

      return () => clearInterval(interval);
    } else {
      setProgress(100); // Complete when done
    }
  }, [isLoading]);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid);
      } else {
        fetchUserInfo(null); // or however your store handles logout
      }
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <Progress value={progress} className="w-64" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  return (
    <>
      {currentUser ? (
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

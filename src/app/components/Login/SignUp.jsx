"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading("true");
      await setDoc(doc(db, "users", response.user.uid), {
        username: username,
        email,
        id: response.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", response.user.uid), {
        chats: [],
      });

      setUserName("");
      setEmail("");
      setPassword("");

      toast.success("Account Created Successfully! \nYou can Sign in now");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg border border-white/20 rounded-xl ">
      <div className="flex flex-col mx-10 my-30 ">
        <h1 className="text-5xl font-black mt-10">Sign Up</h1>
        <p className="mt-5 pl-3 text-zinc-400">Hello there new guy👋</p>

        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-y-2 m-10 w-sm">
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full outline-none focus:outline-2 focus:outline-zinc-50/30"
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full outline-none focus:outline-2 focus:outline-zinc-50/30"
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full outline-none focus:outline-2 focus:outline-zinc-50/30"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="flex items-center mb-5 gap-x-2 cursor-pointer text-zinc-500/80"></div>
          <Button
            className={`cursor-pointer bg-sky-500/50 hover:bg-sky-700 rounded-2xl p-2 ${
              loading ? "bg-sky-500/20 cursor-none" : ""
            }`}
            disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </form>

        <div className="text-right mt-2 items-center mb-5 cursor-pointer text-zinc-500 text-sm">
          <span>Already have an account?</span>
          <a href="./signin">
            {" "}
            <button className="font-bold text-sky-500/60 hover:text-sky-500 cursor-pointer ml-1">
              Sign in
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

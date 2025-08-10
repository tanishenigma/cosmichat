"use client";
import { LockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import React, { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      setLoading(true);
      const response = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Sign in Successful!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white/10 backdrop-blur-md shadow-lg border border-white/20 rounded-xl ">
      <div className="flex flex-col mx-10 my-30 ">
        <h1 className="text-5xl font-black mt-10">Sign In</h1>
        <p className="mt-5 pl-3 text-zinc-400 ">
          Keep it all together and you&apos;ll be fine
        </p>

        <form
          className="flex flex-col gap-y-2 m-10 w-sm"
          onSubmit={handleLogin}>
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full outline-none focus:outline-2 focus:outline-zinc-50/30"
            placeholder="Enter your Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="p-2 bg-zinc-700 rounded-xl w-full outline-none focus:outline-2 focus:outline-zinc-50/30"
            placeholder="Enter your Password"
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <div className="flex items-center mb-5 gap-x-2 cursor-pointer text-zinc-500/80">
            <LockIcon size={15} />
            <span className="text-sm  hover:text-zinc-500 cursor-pointer">
              Forgot Password
            </span>
          </div>
          <Button
            className={`cursor-pointer bg-sky-500/50 hover:bg-sky-700 rounded-2xl p-2 ${
              loading ? "bg-sky-500/20 cursor-none" : ""
            }`}
            disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </Button>
        </form>

        <div className="text-right mt-2 items-center mb-5 cursor-pointer text-zinc-500 text-sm ">
          <span>Don&apos;t have an account?</span>
          <a href="./signup">
            <button className="font-bold text-sky-500/60 hover:text-sky-500 cursor-pointer ml-1">
              Sign up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

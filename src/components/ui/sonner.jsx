"use client";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-gray-800 group-[.toaster]:text-white group-[.toaster]:border-gray-700 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-300",
          actionButton: "group-[.toast]:bg-sky-500 group-[.toast]:text-white",
          cancelButton:
            "group-[.toast]:bg-gray-600 group-[.toast]:text-gray-200",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

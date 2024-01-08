"use client";
import { PowerIcon } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SignOutIcon() {
  const handleOnClickSignOut = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("clicked signout");
    signOut();
  };
  return (
    <button
      onClick={(e) => handleOnClickSignOut(e)}
      className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <PowerIcon className="w-6 h-6 text-gray-600" />
    </button>
  );
}

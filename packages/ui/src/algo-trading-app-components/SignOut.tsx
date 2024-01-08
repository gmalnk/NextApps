"use client";
import { signOut } from "next-auth/react";
import ButtonDark from "./ButtonDark";

export default async function SighOut() {
  const handleOnClickLogOut = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signOut();
  };
  return (
    <div onClick={(e) => handleOnClickLogOut(e)}>
      <ButtonDark text="Log Out" />
    </div>
  );
}

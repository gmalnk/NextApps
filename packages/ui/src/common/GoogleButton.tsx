"use client";

import Image from "next/image";
import { Button } from "../../components/ui/button";
import GoogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";

export default function GithubButton() {
  const handleOnClickGoogle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("clicked google");
    signIn("google");
  };
  return (
    <Button
      onClick={(e) => handleOnClickGoogle(e)}
      variant="outline"
      size="icon"
    >
      <Image priority src={GoogleIcon} alt="Google icon" className="w-6 h-6" />
    </Button>
  );
}

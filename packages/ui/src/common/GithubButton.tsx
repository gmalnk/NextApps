"use client";

import { GithubIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { signIn } from "next-auth/react";
export default function GithubButton() {
  const handleOnClickGit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("clicked git");
    signIn("github");
  };
  return (
    <Button onClick={(e) => handleOnClickGit(e)} variant="outline" size="icon">
      <GithubIcon />
    </Button>
  );
}

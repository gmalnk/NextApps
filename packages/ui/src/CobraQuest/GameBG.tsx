import Image from "next/image";

export default function GameBG() {
  return (
    <Image
      priority
      alt="CobraQuest"
      src={`/snake_bg.jpg`}
      className=" absolute w-screen h-screen -z-10"
      quality={100}
      fill={true}
    ></Image>
  );
}

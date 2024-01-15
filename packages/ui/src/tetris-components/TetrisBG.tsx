import Image from "next/image";

export default function TetrisBG() {
  return (
    <Image
      priority
      alt="tetris"
      src={`/tetris_bg.jpg`}
      className=" absolute w-screen h-screen -z-10"
      quality={100}
      fill={true}
    ></Image>
  );
}

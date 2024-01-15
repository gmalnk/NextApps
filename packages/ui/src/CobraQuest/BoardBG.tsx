import Image from "next/image";

export default function BoardBG() {
  return (
    <div className="absolute top-0 left-0 h-full w-full -z-[8]">
      <Image
        alt=""
        src="/snake_ground.jpg"
        priority
        fill
        className="h-full w-full"
      />
    </div>
  );
}

import Game from "@repo/ui/src/CobraQuest/Game";
import GameBG from "@repo/ui/src/CobraQuest/GameBG";
export default function Home() {
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <GameBG />
      <Game />
    </div>
  );
}

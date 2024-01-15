"use client";
import { useSetRecoilState } from "recoil";
import { gameState } from "store/atoms/corbraQuest";
export default function StartGame() {
  const setGameState = useSetRecoilState(gameState);

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Cobra Quest</h1>
      </div>
      <div>
        <button
          onClick={() => {
            setGameState(true);
          }}
          className=" text-black bg-[#04cf37] ring-2 ring-offset-1 ring-white px-8 py-4 font-medium text-2xl rounded-xl hover:cursor-pointer hover:scale-105 active:scale-[.96]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

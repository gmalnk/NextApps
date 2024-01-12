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
          className=" text-white bg-gray-600 px-8 py-4 font-medium text-2xl rounded-xl hover:cursor-pointer hover:scale-110 hover:bg-slate-700 active:scale-[.96]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

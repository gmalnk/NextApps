"use client";
import GameBoard from "./GameBoard";
import StartGame from "./StartGame";
import GameController from "./GameController";
import { useRecoilValue } from "recoil";
import { gameState } from "store/atoms/corbraQuest";
export default function Game() {
  const gameOn = useRecoilValue(gameState);
  return gameOn ? (
    <>
      <GameBoard />
      <GameController />
    </>
  ) : (
    <>
      <StartGame />
    </>
  );
}

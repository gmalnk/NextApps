"use client";

import Board from "./Board";
import Display from "./Display";
import StartButton from "./StartButton";

import { createBoard, checkCollision } from "@repo/ui/lib/tetrisUtils";
import { usePlayer } from "hooks/tetris/usePlayer";
import { useBoard } from "hooks/tetris/useBoard";
import { useInterval } from "hooks/tetris/useInterval";
import { useGameStatus } from "hooks/tetris/useGameStatus";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Tetris() {
  let [player, updatePlayerPos, resetPlayer, rotatePlayer] = usePlayer();
  const [board, setBoard, rowsCleared] = useBoard(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);
  const [dropTime, setDropTime] = useState<number>(null as unknown as number);
  const [gameOver, setGameOver] = useState(false);
  // console.log("re-render");

  function movePlayerHorizontal(dir: number) {
    if (!checkCollision(player, board, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0, collided: false });
    }
  }

  function startGame() {
    setBoard(createBoard());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  }

  function drop() {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev: number) => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }
    if (!checkCollision(player, board, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log("Game Over!!!");
        setGameOver(true);
        setDropTime(null as unknown as number);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }

  const keyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.code);
    if (!gameOver) {
      if (e.code == "ArrowDown") {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };

  function dropPlayer() {
    setDropTime(null as unknown as number);
    drop();
  }

  const move = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e.key);
    if (!gameOver) {
      switch (e.code) {
        case "ArrowLeft":
          movePlayerHorizontal(-1);
          break;
        case "ArrowRight":
          movePlayerHorizontal(1);
          break;
        case "ArrowDown":
          dropPlayer();
          break;
        case "ArrowUp":
          rotatePlayer(board, 1);
          break;
      }
    }
  };

  useInterval(drop, dropTime);

  return (
    <div
      className="h-screen w-screen "
      role="button"
      tabIndex={0}
      onKeyDown={(e) => move(e)}
      onKeyUp={(e) => keyUp(e)}
    >
      <div className="flex items-center justify-center relative top-[100px]">
        <div className="relative flex gap-8 backdrop-blur-xl p-8 rounded-2xl">
          <Board board={board} />
          <aside>
            {gameOver ? (
              <Display text="Game Over" />
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <Display text={`Score : ${score}`} />
                  <Display text={`rows : ${rows}`} />
                  <Display text={`Level : ${level}`} />
                </div>
                <StartButton callBack={startGame} />
              </>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

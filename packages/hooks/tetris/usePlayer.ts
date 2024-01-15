"use client";
import { useState, useCallback } from "react";
import {
  getRandomTetrominoShape,
  TETROMINOS_WIDTH,
  TETROMINOS,
  TetrisBoard,
  checkCollision,
} from "@repo/ui/lib/tetrisUtils";

export type Player = {
  pos: { x: number; y: number };
  tetromino: (string | number)[][];
  collided: boolean;
};

export function usePlayer(): [
  {
    pos: { x: number; y: number };
    tetromino: (string | number)[][];
    collided: boolean;
  },
  ({ x, y, collided }: { x: number; y: number; collided: boolean }) => void,
  () => void,
  (board: TetrisBoard, dir: number) => void,
] {
  const [player, setPlayer] = useState({
    pos: { x: TETROMINOS_WIDTH / 2 - 2, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });
  // console.log("usePlayer - player", player);

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: TETROMINOS_WIDTH / 2 - 2, y: 0 },
      tetromino: getRandomTetrominoShape(),
      collided: false,
    });
  }, []);

  const updatePlayerPos = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }) => {
    setPlayer((prev) => {
      console.log();
      return {
        ...prev,
        pos: { x: prev.pos.x + x, y: prev.pos.y + y },
        collided,
      };
    });
  };

  const rotate = (matrix: TetrisBoard, dir: number) => {
    // Make the rows to become cols (transpose)
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    // Reverse each row to get a rotated matrix
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  const rotatePlayer = (board: TetrisBoard, dir: number) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, board, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  return [player, updatePlayerPos, resetPlayer, rotatePlayer];
}

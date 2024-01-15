"use client";
import { Player } from "hooks/tetris/usePlayer";
export const TETROMINOS_hEIGHT = 20;
export const TETROMINOS_WIDTH = 10;
export type Tetromino = {
  shape: (string | number)[][];
  color?: string;
};

export type Tetrominos = {
  [key: string]: Tetromino;
};

export type TetrisBoard = { type: string; cellState: "clear" | "merged" }[][];

export type TetrisRow = { type: string; cellState: "clear" | "merged" }[];

export const TETROMINOS: Tetrominos = {
  0: { shape: [[0]], color: "#212233" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "#21defe",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "#cf5f09",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "#003ef7",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "#f78800",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "#f9100c",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "#e3ff0d",
  },
  T: {
    shape: [
      ["T", "T", "T"],
      [0, "T", 0],
      [0, 0, 0],
    ],
    color: "#42fc1b",
  },
};

export function createBoard() {
  return Array.from(Array(TETROMINOS_hEIGHT), () => {
    return new Array(TETROMINOS_WIDTH).fill({ type: "0", cellState: "clear" });
  });
}

export function getRandomTetrominoShape(): (string | number)[][] {
  const tetrominos = "IJLOSTZ";
  const randomTetromino = tetrominos[
    Math.floor(Math.random() * tetrominos.length)
  ] as keyof typeof TETROMINOS;
  return TETROMINOS[randomTetromino]?.shape as (string | number)[][];
}

export const checkCollision = (
  player: Player,
  board: TetrisBoard,
  { x: moveX, y: moveY }: { x: number; y: number }
) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < (player.tetromino[y]?.length as number); x += 1) {
      // if the item is actual tetromino
      if (player?.tetromino?.[y]?.[x] !== 0) {
        if (
          // if tetromino item is not in the board height
          !board[y + player.pos.y + moveY] ||
          // if tetromino item is not in the board width
          !board[y + player.pos.y + moveY]?.[x + player.pos.x + moveX] ||
          // if tetromino item is overlapping with some thing else
          board[y + player.pos.y + moveY]?.[x + player.pos.x + moveX]
            ?.cellState != "clear"
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

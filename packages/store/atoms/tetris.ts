import { atom } from "recoil";
import { getRandomTetrominoShape, createBoard } from "@repo/ui/lib/tetrisUtils";

export const tetrisHeight = atom({
  key: "tetris.height",
  default: 20,
});
export const tetrisWidth = atom({
  key: "tetris.width",
  default: 10,
});

export const playerState = atom({
  key: "playerState",
  default: {
    pos: { x: 0, y: 0 },
    tetromino: getRandomTetrominoShape(),
    collided: false,
  },
});

export const boardState = atom({
  key: "boardState",
  default: createBoard(),
});

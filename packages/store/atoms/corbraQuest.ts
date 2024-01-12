import { atom } from "recoil";

export const gameState = atom({
  key: "gameState",
  default: false,
});

export const gridSizeState = atom({
  key: "gridSizeState",
  default: 20,
});

export const snakeDirectionState = atom({
  key: "snakeDirectionState",
  default: "right",
});

export const gameSpeedState = atom({
  key: "gameSpeedState",
  default: 200,
});

export const snakeState = atom({
  key: "snakeState",
  default: [{ x: 10, y: 10 }],
});

export const foodState = atom({
  key: "foodState",
  default: { x: -1, y: -1 },
});

export const gameScoreState = atom({
  key: "gameScoreState",
  default: 0,
});

"use client";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { createBoard, TetrisBoard, TetrisRow } from "@repo/ui/lib/tetrisUtils";
import { Player } from "./usePlayer";

export function useBoard(
  player: Player,
  resetPlayer: any
): [TetrisBoard, Dispatch<SetStateAction<TetrisBoard>>, number] {
  const [board, setBoard] = useState<TetrisBoard>(createBoard());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = (newBoard: TetrisBoard) =>
      newBoard.reduce((ack: TetrisBoard, row) => {
        if (row.findIndex((cell) => cell.type === "0") === -1) {
          setRowsCleared((prev) => prev + 1);
          ack.unshift(
            new Array(row.length).fill({
              type: "0",
              cellState: "clear",
            }) as TetrisRow
          );
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateBoard = (prevBoard: TetrisBoard) => {
      // console.log("updateBoard", player);
      const newBoard = prevBoard.map(
        (row): TetrisRow =>
          row.map((cell) =>
            cell.cellState === "clear"
              ? { type: "0", cellState: "clear" }
              : { ...cell }
          )
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((element, x) => {
          if (element !== 0) {
            newBoard[y + player.pos.y][x + player.pos.x] = {
              type: element as string,
              cellState: player.collided ? "merged" : "clear",
            };
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newBoard);
      }

      return newBoard;
    };

    setBoard((prevBoard: TetrisBoard) => updateBoard([...prevBoard]));
  }, [player, resetPlayer]);

  return [board, setBoard, rowsCleared];
}

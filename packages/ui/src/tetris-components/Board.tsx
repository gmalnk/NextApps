import { TetrisBoard } from "../../lib/tetrisUtils";
import Cell from "./Cell";

export default function Board({ board }: { board: TetrisBoard }) {
  return (
    <div className="grid grid-cols-10 grid-rows-[20] max-w-[300px] gap-[2px] p-1 bg-black rounded-[4px]">
      {board.map((row) =>
        row.map((item, i) => <Cell key={i} type={item.type} />)
      )}
    </div>
  );
}

import { TETROMINOS } from "../../lib/tetrisUtils";
import React from "react";

const Cell = ({ type }: { type: string }) => {
  return (
    <div
      className="text-white font-semibold w-[20px] h-[20px] rounded-[4px]"
      style={{
        background: TETROMINOS[type]?.color,
      }}
    ></div>
  );
};
export default React.memo(Cell);

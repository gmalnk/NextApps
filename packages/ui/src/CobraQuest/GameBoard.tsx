import { useRecoilValue } from "recoil";
import { foodState, snakeState } from "store/atoms/corbraQuest";
import BoardBG from "./BoardBG";

export default function GameBoard() {
  const snake = useRecoilValue(snakeState);
  const foodPosition = useRecoilValue(foodState);
  return (
    <div className="relative">
      <BoardBG />
      <div className=" grid grid-cols-[repeat(20,20px)] grid-rows-[repeat(20,20px)]">
        {snake.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                gridArea: `${item.x}/${item.y}`,
                scale: Math.round(100 - index * (50 / snake.length)) / 100,
              }}
              className={`rounded-[6px] bg-black border-white border-1 first:rounded-md last:bg-gray-800`}
            ></div>
          );
        })}
        <div
          className=" rounded-xl bg-red-600 ring-4 ring-red-700 scale-[.6]"
          style={{
            gridArea: `${foodPosition.x}/${foodPosition.y}`,
          }}
        ></div>
      </div>
    </div>
  );
}

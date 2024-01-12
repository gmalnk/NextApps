import { useRecoilValue } from "recoil";
import { foodState, snakeState } from "store/atoms/corbraQuest";

export default function GameBoard() {
  const snake = useRecoilValue(snakeState);
  const foodPosition = useRecoilValue(foodState);
  return (
    <div>
      <div className=" grid grid-cols-[repeat(20,20px)] grid-rows-[repeat(20,20px)] bg-slate-200">
        {snake.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                gridArea: `${item.x}/${item.y}`,
              }}
              className=" rounded-sm bg-black border-white border-1 first:rounded-md first:scale-110 last:bg-gray-800 last:scale-90"
            ></div>
          );
        })}
        <div
          style={{
            gridArea: `${foodPosition.x}/${foodPosition.y}`,
            background: "yellow",
          }}
        ></div>
      </div>
    </div>
  );
}

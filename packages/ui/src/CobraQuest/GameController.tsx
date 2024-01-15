import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  foodState,
  gameState,
  gridSizeState,
  snakeDirectionState,
  snakeState,
} from "store/atoms/corbraQuest";
import {
  checkCollision,
  getFoodPosition,
  move,
} from "../../lib/CobraQuestUtils";
import { useEffect } from "react";

const useHandleKeyPress = (event: any, setDirection: any) => {
  // console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      // console.log("from press ArrowUp");
      setDirection("up");
      break;
    case "ArrowDown":
      // console.log("from press ArrowDown");
      setDirection("down");
      break;
    case "ArrowLeft":
      // console.log("from press ArrowLeft");
      setDirection("left");
      break;
    case "ArrowRight":
      // console.log("from press ArrowRight");
      setDirection("right");
      break;
    default:
      setDirection("up");
      break;
  }
};

export default function GameController() {
  const [snake, setSnake] = useRecoilState(snakeState);
  const [direction, setDirection] = useRecoilState(snakeDirectionState);
  const [game, setGame] = useRecoilState(gameState);
  const gridSize = useRecoilValue(gridSizeState);
  const [food, setFood] = useRecoilState(foodState);

  useEffect(() => {
    const cloneSnake = snake.map((obj) => ({ ...obj }));
    const food = getFoodPosition(cloneSnake, gridSize);
    console.log("snake", snake);
    setFood(food);
  }, [snake.length]);

  useEffect(() => {
    if (!game) {
      return;
    }
    const gameInterval = setInterval(() => {
      setSnake((prevSnake) => move([...prevSnake], food, direction));
      if (!checkCollision(snake, gridSize)) {
        setGame(false);
        setSnake([{ x: 10, y: 10 }]);
      }
    }, 100);

    return () => clearInterval(gameInterval);
  }, [direction, snake, game, food]);

  useEffect(() => {
    // Attach the event listener on mount
    document.addEventListener("keydown", (event) =>
      useHandleKeyPress(event, setDirection)
    );

    // Remove the event listener on unmount
    return () => {
      document.removeEventListener("keydown", (event) =>
        useHandleKeyPress(event, setDirection)
      );
    };
  }, []);
  return <></>;
}

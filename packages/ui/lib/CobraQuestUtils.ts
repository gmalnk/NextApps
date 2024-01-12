import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  gameState,
  snakeDirectionState,
  snakeState,
} from "store/atoms/corbraQuest";

export function getFoodPosition(snake: { x: number; y: number }[], grid = 20) {
  const position = getRandomPosition(
    1,
    grid * grid,
    snake.map((item) => {
      return 10 * (item.x - 1) + item.y;
    })
  );
  return position % grid === 0
    ? {
        x: Math.floor(position / grid),
        y: grid,
      }
    : {
        x: Math.floor(position / grid) + 1,
        y: position % grid,
      };
}

function getRandomPosition(min: number, max: number, excludeNumbers: number[]) {
  let randomNum;

  do {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (excludeNumbers.includes(randomNum));

  return randomNum;
}

// export function useStartGame() {
//   setGameState(true);
//   const gameInterval = setInterval(() => {
//     setSnake((prevSnake) => move([...prevSnake]));
//   }, 200);
// }

export function move(
  snake: { x: number; y: number }[],
  food: { x: number; y: number },
  direction = "right"
) {
  const head = { ...snake[0] } as { x: number; y: number };
  switch (direction) {
    case "up":
      head.x--;
      break;
    case "down":
      head.x++;
      break;
    case "left":
      head.y--;
      break;
    case "right":
      head.y++;
      break;
  }
  // console.log("snake", snake);
  snake = [head, ...snake];

  if (head.x === food.x && head.y === food.y) {
    // food = generateFood();
    // increaseSpeed();
    // clearInterval(gameInterval); // Clear past interval
    // gameInterval = setInterval(() => {
    //   move();
    //   checkCollision();
    //   draw();
    // }, gameSpeedDelay);
  } else {
    snake.pop();
  }
  return snake;
}

export function checkCollision(
  snake: { x: number; y: number }[],
  gridSize: number
) {
  // console.log(snake, snake.length);

  const head = snake[0] as { x: number; y: number };

  if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
    return false;
  }

  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i]?.x && head.y === snake[i]?.y) {
      return false;
    }
  }
  return true;
}

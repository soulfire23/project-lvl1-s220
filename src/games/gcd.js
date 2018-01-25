import game from '../engine';
import { getRandomNumber } from '../utils';

const gameTask = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const rules = 'Find the greatest common divisor of given numbers.';
  const question = `${num1} ${num2}`;
  let answer = 0;

  let maxNum = 0;
  let minNum = 0;

  if (num1 === num2) {
    answer = num1;
  } else if (num1 > num2) {
    maxNum = num1;
    minNum = num2;
  } else {
    maxNum = num2;
    minNum = num1;
  }
  for (let i = minNum; i > 0; i -= 1) {
    if (maxNum % i === 0 && minNum % i === 0) {
      answer = i;
      break;
    }
  }
  return [rules, question, answer];
};

const newGame = () => game(gameTask);

export default newGame;

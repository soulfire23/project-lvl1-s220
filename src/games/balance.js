import game from '../engine';
import { getRandomNumber } from '../utils';

const gameTask = () => {
  const num1 = getRandomNumber(1, 1000);
  const num2 = getRandomNumber(1, 1000);
  const mathSign = getRandomMath();

  const rules = 'Balance the given number.';
  const question = `${num1} ${mathSign} ${num2}`;
  let answer = 0;

  switch (mathSign) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }
  return [rules, question, answer];
};

const newGame = () => game(gameTask);

export default newGame;

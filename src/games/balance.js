import game from '../engine';
import { getRandomNumber } from '../utils';

const gameTask = () => {
  const num1 = getRandomNumber(1, 1000);
  const num2 = getRandomNumber(1, 1000);

  const rules = 'Balance the given number.';
  const question = `${num1} ${num2}`;
  const answer = 0;

  return [rules, question, answer];
};

const newGame = () => game(gameTask);

export default newGame;

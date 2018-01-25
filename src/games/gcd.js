import game from '..';
import { getRandomNumber } from '../utils';

const rules = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const gameTask = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const answer = findGCD(num1, num2);
  return [question, answer];
};

const newGame = () => game(gameTask, rules);

export default newGame;

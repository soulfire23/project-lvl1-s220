import game from '..';
import { getRandomNumber, getRandomMath } from '../utils';

const rules = 'What is the result of the expression?';

const gameTask = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const mathSign = getRandomMath();
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
  return [question, answer];
};

const newGame = () => game(gameTask, rules);

export default newGame;

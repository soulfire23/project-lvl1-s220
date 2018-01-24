import game from '../engine';
import { getRandomNumber, getRandomMath } from '../utils';

const gameTask = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const mathSign = getRandomMath();

  const rules = 'What is the result of the expression?';
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

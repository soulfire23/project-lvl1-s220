import game from '../engine';
import { isEven, getRandomNumber } from '../utils';

const gameTask = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const question = getRandomNumber();
  const answer = isEven(question);
  return [rules, question, answer];
};

const newGame = () => game(gameTask);

export default newGame;

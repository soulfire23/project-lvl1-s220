import game from '..';
import { isEven, getRandomNumber } from '../utils';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const gameTask = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const newGame = () => game(gameTask, rules);

export default newGame;

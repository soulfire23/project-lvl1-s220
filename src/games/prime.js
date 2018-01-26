import game from '..';
import { getRandomNumber } from '../utils';

const rules = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameTask = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const newGame = () => game(gameTask, rules);

export default newGame;

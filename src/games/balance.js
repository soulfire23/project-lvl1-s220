import game from '..';
import { getRandomNumber } from '../utils';

const rules = 'Balance the given number.';

const gameTask = () => {
  const question = getRandomNumber(100, 1000).toString();
  const getBalance = (num) => {
    const numArray = num.split('').sort();
    for (let i = 0; i < numArray.length; i += 1) {
      numArray[i] = Number(numArray[i]);
    }
    if ((numArray[0] + 1) < numArray[numArray.length - 1]) {
      numArray[0] += 1;
      numArray[numArray.length - 1] -= 1;
      return getBalance(numArray.join(''));
    }
    return numArray.join('');
  };

  const answer = getBalance(question);

  return [question, answer];
};

const newGame = () => game(gameTask, rules);

export default newGame;

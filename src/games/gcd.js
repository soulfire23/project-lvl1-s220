import game from '../engine';
import { getRandomNumber } from '../utils';

const gameTask = 'Find the greatest common divisor of given numbers.\n';

const getQuestion = () => `${getRandomNumber()} ${getRandomNumber()}`;
const getAnswer = (str) => {
  const math = str.split(' ');
  let maxNum = 0;
  let minNum = 0;
  if (math[0] === math[1]) {
    return math[0];
  } else if (math[0] > math[1]) {
    maxNum = math[0];
    minNum = math[1];
  } else {
    maxNum = math[1];
    minNum = math[0];
  }
  for (let i = minNum; i > 0; i -= 1) {
    if (maxNum % i === 0 && minNum % i === 0) {
      return i;
    }
  }
};

const newGame = () => game(gameTask, getQuestion, getAnswer);

export default newGame;

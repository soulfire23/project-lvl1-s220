import game from '../engine';
import { getRandomNumber, getRandomMath } from '../utils';

const gameTask = 'What is the result of the expression?\n';

const getQuestion = () => `${getRandomNumber()} ${getRandomMath()} ${getRandomNumber()}`;
const getAnswer = (str) => {
  const math = str.split(' ');
  console.log(math);
  if (math[1] === '+') {
    return +math[0] + +math[2];
  } else if (math[1] === '-') {
    return math[0] - math[2];
  }
  return math[0] * math[2];
};

const newGame = () => game(gameTask, getQuestion, getAnswer);

export default newGame;

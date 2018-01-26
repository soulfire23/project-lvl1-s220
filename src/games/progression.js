import game from '..';
import { getRandomNumber } from '../utils';

const rules = 'Find missing number.';

const getProgression = (firstNumber, incNumber) => {
  const progression = [firstNumber];
  for (let i = 1; i <= 10; i += 1) {
    progression.push(progression[i - 1] + incNumber);
  }
  return progression;
};

const gameTask = () => {
  const firstNumber = getRandomNumber(1, 10);
  const incNumber = getRandomNumber(1, 10);
  const hiddenNumber = getRandomNumber(1, 10) - 1;

  const progression = getProgression(firstNumber, incNumber);
  const answer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const newGame = () => game(gameTask, rules);

export default newGame;

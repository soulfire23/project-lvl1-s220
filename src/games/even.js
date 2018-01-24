import game from '../engine';
import { isEven, getRandomNumber } from '../utils';

const gameTask = 'Answer "yes" if number even otherwise answer "no".\n';

const getQuestion = () => getRandomNumber();
const getAnswer = num => (isEven(num) ? 'yes' : 'no');

const newGame = () => game(gameTask, getQuestion, getAnswer);

export default newGame;

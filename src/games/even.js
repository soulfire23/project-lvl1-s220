import readlineSync from 'readline-sync';
import greeting from '..';

const ask = (name, count) => {
  if (count < 1) {
    return console.log(`Congratulations, ${name}!`);
  }
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer.toLowerCase() === isEven) {
    console.log('Correct!\n');
    return ask(name, count - 1);
  }
  return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven}'.\nLet's try again, ${name}!`);
};

const newEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = greeting();
  return ask(name, 3);
};

export default newEvenGame;

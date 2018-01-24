import readlineSync from 'readline-sync';

const welcome = () => console.log('Welcome to the Brain Games!');

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const game = (gameTask, getQuestion, getAnswer) => {
  welcome();
  console.log(gameTask);
  const name = greeting();

  const play = (userName, count) => {
    if (count < 1) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const question = getQuestion();
    const correctAnswer = getAnswer(question).toString();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!\n');
      return play(userName, count - 1);
    }

    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  };
  return play(name, 3);
};

export default game;
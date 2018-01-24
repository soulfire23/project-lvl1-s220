export const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
export const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
export const getRandomMath = () => {
  const randomNumber = getRandomNumber();
  if (randomNumber < 33) {
    return '+';
  } else if (randomNumber > 33 && randomNumber < 66) {
    return '-';
  }
  return '*';
};

export const isEven = num => (num % 2 === 0 ? 'yes' : 'no');
export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
export const getRandomMath = () => {
  const randomNumber = getRandomNumber(1, 3);
  if (randomNumber === 1) {
    return '+';
  } else if (randomNumber === 2) {
    return '-';
  }
  return '*';
};

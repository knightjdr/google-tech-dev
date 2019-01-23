// https://codingbat.com/prob/p121193

const sumNumbers = (str) => {
  let arr = str.split('');
  let currentNumber = '';
  let sum = arr.reduce((runningSum, char) => {
    if (!isNaN(Number(char)) && char !== ' ') {
      currentNumber += char;
      return runningSum;
    } if (currentNumber) {
      const newSum = runningSum + Number(currentNumber);
      currentNumber = '';
      return newSum;
    }
    return runningSum;
  }, 0);
  if (currentNumber) {
    sum += Number(currentNumber);
  }
  return sum;
};

module.exports = sumNumbers;

// https://codingbat.com/prob/p121193

const sumNumbers = (str) => {
  const re = new RegExp(/[^0-9]+/g);
  const numbers = str.replace(re, ',').split(',');
  return numbers.reduce((sum, number) => sum + Number(number), 0);
};

module.exports = sumNumbers;

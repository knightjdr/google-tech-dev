// https://codingbat.com/prob/p189576

const maxSpan = arr => {
  const reversed = [...arr].reverse();
  return arr.reduce((maxSpan, item, index) => {
    const span = arr.length - reversed.indexOf(item) - index;
    return span > maxSpan ? span : maxSpan;
  }, 1);
};

module.exports = maxSpan;

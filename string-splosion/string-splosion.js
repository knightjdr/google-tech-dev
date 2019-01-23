const stringSplosion = str => (
  str.split('').reduce((accum, letter, index) => (
    accum += str.substring(0, index + 1)
  ), '')
);

module.exports = stringSplosion;

// https://codingbat.com/prob/p192570

const withoutString = (base, remove) => {
  const re = new RegExp(remove, 'g');
  return base.replace(re, '');
};

module.exports = withoutString;

const canBalance = (arr) => {
  if (arr.length < 2) {
    return false;
  }
  for (let i = 1; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((sum, item) => sum + item, 0);
    const rightSum = arr.slice(i, arr.length).reduce((sum, item) => sum + item, 0);
    if (leftSum === rightSum) {
      return true;
    }
  }
  return false;
};

module.exports = canBalance;

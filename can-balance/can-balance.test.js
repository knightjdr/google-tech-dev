const canBalance = require('./can-balance');

describe('Can balance', () => {
  it('should return true if a numerical array can be split into two equal sums', () => {
    const inputs = [
      [1, 1, 1, 2, 1],
      [10, 10],
    ];
    inputs.forEach((arr) => {
      expect(canBalance(arr)).toBeTruthy();
    });
  });

  it('should return false if a numerical array cannot be split into two equal sums', () => {
    const inputs = [
      [10],
      [2, 1, 1, 2, 1],
    ];
    inputs.forEach((arr) => {
      expect(canBalance(arr)).toBeFalsy();
    });
  });
});

const sumNumbers = require('./sum-numbers');

describe('Sum numbers', () => {
  it('should return the sum of all number in a string', () => {
    const inputs = [
      'abc123xyz',
      'aa11b33',
      '7 11',
    ];
    const expected = [
      123,
      44,
      18,
    ];
    inputs.forEach((input, index) => {
      expect(sumNumbers(input)).toBe(expected[index]);
    });
  });
});

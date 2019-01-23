const maxSpan = require('./max-span');

describe('Max span', () => {
  it('should return max span between any two items in an array', () => {
    const inputs = [
      [1],
      [1, 2, 1, 1, 3],
      [1, 4, 2, 1, 4, 1, 4],
      [1, 4, 2, 1, 4, 4, 4],
    ];
    const expected = [1, 4, 6, 6];
    inputs.forEach((arr, index) => {
      expect(maxSpan(arr)).toBe(expected[index]);
    });
  });
});

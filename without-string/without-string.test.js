const withoutString = require('./without-string');

describe('Without string', () => {
  it('should all non-overlapping instances of a string from a base string', () => {
    const baseInputs = [
      'xxx',
      'Hello there',
      'Hello there',
      'Hello there',
    ];
    const removeInputs = [
      'xx',
      'llo',
      'e',
      'x',
    ];
    const expected = [
      'x',
      'He there',
      'Hllo thr',
      'Hello there',
    ];
    baseInputs.forEach((base, index) => {
      expect(withoutString(base, removeInputs[index])).toBe(expected[index]);
    });
  });
});

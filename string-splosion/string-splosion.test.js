const stringSplosion = require('./string-splosion');

describe('String splosion', () => {
  it('should return exploded string', () => {
    const inputs = ['Code', 'abc', 'ab'];
    const expected = ['CCoCodCode', 'aababc', 'aab'];
    inputs.forEach((string, index) => {
      expect(stringSplosion(string)).toBe(expected[index]);
    });
  });
});

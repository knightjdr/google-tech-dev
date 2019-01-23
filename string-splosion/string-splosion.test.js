const stringSplosion = require('./string-splosion');

describe('String splosion', () => {
  it('should return', () => {
    const input = ['Code', 'abc', 'ab'];
    const expected = ['CCoCodCode', 'aababc', 'aab'];
    input.forEach((string, index) => {
      expect(stringSplosion(string)).toBe(expected[index]);
    });
  });
});

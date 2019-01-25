const lexicon = require('./lexicon');

describe('Hangman lexicon', () => {
  it('should return the number of words in the lexicon', () => {
    expect(lexicon.getWordCount()).toBe(lexicon.words.length);
  });

  it('should return the word specified by index', () => {
    expect(lexicon.getWord(4)).toBe(lexicon.words[4]);
  });
});

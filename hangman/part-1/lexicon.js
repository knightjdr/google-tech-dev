const lexicon = {
  words: [
    'BUOY',
    'COMPUTER',
    'CONNOISSEUR',
    'DEHYDRATE',
    'FUZZY',
    'HUBBUB',
    'KEYHOLE',
    'QUAGMIRE',
    'SLITHER',
    'ZIRCON',
  ],
  getWord(index) { return this.words[index]; },
  getWordCount() { return this.words.length; },
};

module.exports = lexicon;

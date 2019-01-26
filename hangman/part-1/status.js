const defaultTurns = 8;

const status = {
  init: (word, turns = defaultTurns) => ({
    guesses: {},
    message: 'Welcome to Hangman!',
    numGuesses: turns,
    revealed: word.replace(/./g, '-'),
  }),
  reinit: (word, turns = defaultTurns) => ({
    guesses: {},
    message: 'Welcome again to Hangman!',
    numGuesses: turns,
    revealed: word.replace(/./g, '-'),
  }),
};

module.exports = status;

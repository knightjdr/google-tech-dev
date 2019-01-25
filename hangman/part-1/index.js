/* eslint no-console: 0 */

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1124/handouts/200%20Assignment%204.pdf

const handleGuess = require('./handle-guess');
const lexicon = require('./lexicon');
const nextGuess = require('./next-guess');

const word = lexicon.getWord(Math.floor(Math.random() * lexicon.getWordCount()));

let progress = {
  guesses: {},
  message: 'Welcome to Hangman!',
  numGuesses: 8,
  revealed: word.replace(/./g, '-'),
};

const guessing = async () => {
  console.log(progress.message);
  const guess = await nextGuess(progress.numGuesses, progress.revealed);
  progress = handleGuess(guess, word, progress);
  console.log(progress);
};

guessing();

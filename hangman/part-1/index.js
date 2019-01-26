/* eslint no-console: 0 */

// https://web.stanford.edu/class/archive/cs/cs106a/cs106a.1124/handouts/200%20Assignment%204.pdf

const again = require('./again');
const checkProgress = require('./check-progress');
const handleGuess = require('./handle-guess');
const lexicon = require('./lexicon');
const nextGuess = require('./next-guess');
const status = require('./status');

let progress;
let word;

const begin = (again = false) => {
  word = lexicon.getWord(Math.floor(Math.random() * lexicon.getWordCount()));
  progress = again ? status.reinit(word) : status.init(word);
  console.log(progress.message);
  guessing();
};

const repeat = async () => {
  const shouldRepeat = await again();
  if (shouldRepeat) {
    begin(true);
  } else {
    console.log('Bye.');
  }
};

const guessing = async () => {
  const guess = await nextGuess(progress.numGuesses, progress.revealed);
  progress = handleGuess(guess, word, progress);
  const shouldContinue = checkProgress(progress, word, guessing);
  if (shouldContinue) {
    guessing();
  } else {
    repeat();
  }
};

begin();

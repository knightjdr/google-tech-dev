/* eslint no-console: 0 */

const checkProgress = (progress, word) => {
  console.log(progress.message);
  if (!progress.revealed.includes('-')) {
    console.log(`You guessed the word: ${word}.`);
    console.log('You win.');
    return false;
  } else if (progress.numGuesses === 0) {
    console.log('You\'re completely hung.');
    console.log(`The word was: ${word}`);
    console.log('You lose.');
    return false;
  }
  return true;
};

module.exports = checkProgress;

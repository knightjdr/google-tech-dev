const handleGuess = (guess, word, prevProgress) => {
  const progress = { ...prevProgress };
  if (
    progress.guesses.hasOwnProperty(guess)
    && progress.guesses[guess]
  ) {
    progress.message = 'You already correctly guessed that letter.';
  } else if (
    progress.guesses.hasOwnProperty(guess)
    && !progress.guesses[guess]
  ) {
    progress.message = 'You already incorrectly guessed that letter.';
    progress.numGuesses--;
  } else if (
    guess.length > 1
    || !guess.match(/[A-Z]/)
  ) {
    progress.message = 'You must guess a single letter.';
  } else if (word.includes(guess)) {
    progress.message = 'That guess is correct.';
    progress.guesses[guess] = true;
    progress.revealed = word.split('').reduce((revealed, letter, index) => {
      if (letter === guess) {
        revealed[index] = letter;
      }
      return revealed;
    }, progress.revealed.split('')).join('');
  } else {
    progress.message = `There are no ${guess}'s in the word.`;
    progress.numGuesses--;
    progress.guesses[guess] = false;
  }
  return progress;
};

module.exports = handleGuess;

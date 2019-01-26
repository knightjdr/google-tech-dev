/* eslint no-console: 0 */

const readline = require('readline');

const nextGuess = (numGuesses, revealed) => (
  new Promise((resolve) => {
    console.log(`The word now looks like this: ${revealed}`);
    console.log(`You have ${numGuesses} guesses left.`);
    const prompt = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    prompt.question('Your guess: ', (guess) => {
      resolve(guess.toUpperCase());
      prompt.close();
    });
  })
);

module.exports = nextGuess;

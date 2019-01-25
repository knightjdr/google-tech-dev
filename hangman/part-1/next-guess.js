/* eslint no-console: 0 */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const nextGuess = (numGuesses, revealed) => (
  new Promise((resolve) => {
    console.log(`The word now looks like this: ${revealed}`);
    console.log(`You have ${numGuesses} left.`);
    readline.question('Your guess: ', (guess) => {
      readline.close();
      resolve(guess.toUpperCase());
    });
  })
);

module.exports = nextGuess;

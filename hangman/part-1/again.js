const readline = require('readline');

const affirmative = ['y', 'ya', 'yeah', 'yes'];

const again = () => (
  new Promise((resolve) => {
    const prompt = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    prompt.question('Would you like to play again? (y/N) ', (response) => {
      if (affirmative.includes(response.toLowerCase())) {
        resolve(true);
      } else {
        resolve(false);
      }
      prompt.close();
    });
  })
);

module.exports = again;

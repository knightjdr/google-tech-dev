const handleGuess = require('./handle-guess');

describe('Handle guess', () => {
  describe('chose a correct letter again', () => {
    const prevProgress = {
      guesses: { S: true },
      numGuesses: 7,
    };
    let progress;

    beforeAll(() => {
      progress = handleGuess('S', 'TEST', prevProgress);
    });

    it('should return message indicating guess already picked', () => {
      expect(progress.message).toBe('You already correctly guessed that letter.');
    });

    it('should not decrement number of guesses', () => {
      expect(progress.numGuesses).toBe(7);
    });
  });

  describe('chose an icorrect letter again', () => {
    const prevProgress = {
      guesses: { A: false },
      numGuesses: 7,
    };
    let progress;

    beforeAll(() => {
      progress = handleGuess('A', 'TEST', prevProgress);
    });

    it('should return message indicating guess already picked', () => {
      expect(progress.message).toBe('You already incorrectly guessed that letter.');
    });

    it('should decrement number of guesses', () => {
      expect(progress.numGuesses).toBe(6);
    });
  });

  describe('chose something that is not a singe letter', () => {
    describe('two letters', () => {
      const prevProgress = {
        guesses: {},
        numGuesses: 8,
      };
      let progress;

      beforeAll(() => {
        progress = handleGuess('AA', 'TEST', prevProgress);
      });

      it('should return message that guess is in the wrong format', () => {
        expect(progress.message).toBe('You must guess a single letter.');
      });

      it('should not decrement number of guesses', () => {
        expect(progress.numGuesses).toBe(8);
      });
    });

    describe('space', () => {
      const prevProgress = {
        guesses: {},
        numGuesses: 8,
      };
      let progress;

      beforeAll(() => {
        progress = handleGuess(' ', 'TEST', prevProgress);
      });

      it('should return message that guess is in the wrong format', () => {
        expect(progress.message).toBe('You must guess a single letter.');
      });

      it('should not decrement number of guesses', () => {
        expect(progress.numGuesses).toBe(8);
      });
    });
  });

  describe('chose a correct letter', () => {
    const prevProgress = {
      guesses: { T: true },
      numGuesses: 7,
      revealed: 'T--T',
    };
    let progress;

    beforeAll(() => {
      progress = handleGuess('S', 'TEST', prevProgress);
    });

    it('should add guess to guesses tracker', () => {
      expect(progress.guesses).toEqual({ S: true, T: true });
    });

    it('should return message indicating guess correct', () => {
      expect(progress.message).toBe('That guess is correct.');
    });

    it('should not decrement number of guesses', () => {
      expect(progress.numGuesses).toBe(7);
    });

    it('should update revealed string', () => {
      expect(progress.revealed).toBe('T-ST');
    });
  });

  describe('chose an incorrect letter', () => {
    const prevProgress = {
      guesses: { T: true },
      numGuesses: 7,
      revealed: 'T--T',
    };
    let progress;

    beforeAll(() => {
      progress = handleGuess('X', 'TEST', prevProgress);
    });

    it('should add guess to guesses tracker', () => {
      expect(progress.guesses).toEqual({ T: true, X: false });
    });

    it('should return message indicating guess is incorrect', () => {
      expect(progress.message).toBe('There are no X\'s in the word.');
    });

    it('should decrement number of guesses', () => {
      expect(progress.numGuesses).toBe(6);
    });

    it('should not change revealed string', () => {
      expect(progress.revealed).toBe('T--T');
    });
  });
});

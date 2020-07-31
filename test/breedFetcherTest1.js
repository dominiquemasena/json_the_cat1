const { findBreed } = require('../breedFetcher1');
const { assert } = require('chai');

describe('findBreed', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    findBreed('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});

// findBreed(breedName, printBreed);


const { findBreed } = require('./breedFetcher1');

const breedName = process.argv[2];

findBreed(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
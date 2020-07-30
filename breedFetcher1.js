const request = require('request');
const breedName = process.argv[2];
// const findBreed = function() {

// }

// function that will find the description of Siberian cats
const printBreed = function(breed) {
  if (breed) {
    console.log(`${breed.description}`);
  } else {
    console.log(`Unable to find breed ${breedName}`);
  }
};
const findBreed = function(breedName, printBreed) {
  request(`https://api.thectapi.com/v1/breeds/search?q=${breedName}`,
    function(error, response, body) {
      if (error) {
        return console.log(`The error is: ${error}`);
      }
      const data = JSON.parse(body);
      const breed = data[0];
      printBreed(breed);
      
      // else if (!breedName || data.length === 0) {
      //   printBreed("Breed Not Found", null);
      // } else if (error) {
      //   printBreed(error, null);
      // } else {
      //   printBreed(null, data);
      // }

    });
};



findBreed(breedName, printBreed);
const request = require('request');

const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const parsedBody = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else if (parsedBody.length < 1) {
      error = "Breed not found";
      callback(error, null);
    } else {
      let description = parsedBody[0].description;
      // include null for error param.
      callback(null, description);
    }
  });
};
// fetchBreed(breed);
module.exports = { fetchBreedDescription };
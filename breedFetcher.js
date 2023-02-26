const argv = process.argv.slice(2);
const request = require('request');
const breed = argv[0];

const fetchBreed = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    const parsedBody = JSON.parse(body);
    console.log(parsedBody);
    let description = parsedBody[0].description;
    console.log(description);
  });
};
fetchBreed(breed);
const { fetchBreedDescription } = require('./breedFetcher');
const argv = process.argv.slice(2);
const breed = argv[0];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
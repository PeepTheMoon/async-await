//   * `seed` should create 5 random movies by default
//   * `seed` should create 100 random reviews by default
//   * `seed` should take an object that lets you change the number of movies and/or reviews created

const chance = require('chance').Chance();
const Movie = require('../models/Movie');
const Review = require('../models/Review');

module.exports = async() => {
  await Movie.create([...Array(5)].map(() => ({
    title: `${chance.integer()} nights in ${chance.city()}`,
    description: chance.sentence(),
    studio: `${chance.company()}`
  })));
};

// module.exports = { seed };

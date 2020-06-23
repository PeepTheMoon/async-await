//   * `seed` should take an object that lets you change the number of movies and/or reviews created

const chance = require('chance').Chance();
const Movie = require('../models/Movie');
const Review = require('../models/Review');

module.exports = async() => {
  const movie = await Movie.create([...Array(5)].map(() => ({
    title: `${chance.integer()} nights in ${chance.city()}`,
    description: chance.sentence(),
    studio: `${chance.company()}`
  })));

  await Review.create([...Array(100)].map(() => ({
    movie: chance.pickone(movie)._id,
    authorName: chance.name(),
    comment: chance.sentence()
  })));
};

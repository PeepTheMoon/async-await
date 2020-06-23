const mongoose = require('mongoose');
const seed = require('./seed');

const Movie = require('../models/Movie');
const Review = require('../models/Review');

describe('seed functions', () => {
  beforeAll(() => {
    return mongoose.connect('mongodb://localhost:27017/seedData', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('creates 5 random movies', () => {
    return seed()
      .then(() => Movie.find())
      .then(movies => {
        expect(movies).toHaveLength(5);
      });
  });

  it('creates 100 random reviews', () => {
    return seed()
      .then(() => Review.find())
      .then(reviews => {
        expect(reviews).toHaveLength(100);
      });
  });

  it('creates n number of random movies', () => {
    return seed({ movies: 50 })
      .then(() => Movie.find())
      .then(movies => {
        expect(movies).toHaveLength(50);
      });
  });

  it('creates n number of random reviews', () => {
    return seed({ reviews: 75 })
      .then(() => Review.find())
      .then(reviews => {
        expect(reviews).toHaveLength(75);
      });
  });
});

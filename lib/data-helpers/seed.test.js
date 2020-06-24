const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../utils/connect');
const seed = require('./seed');
const Movie = require('../models/Movie');
const Review = require('../models/Review');

describe('seed functions', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
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

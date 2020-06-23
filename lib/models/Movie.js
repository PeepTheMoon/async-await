const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    maxLength: 80
  },

  description: {
    type: String,
    required: true
  },

  studio: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Movie', schema);

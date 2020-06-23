const mongoose = require('mongoose');

const schema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    maxLength: 80
  },

  description: {
    type: String,
    required: true,
    maxlength: 100
  },

  studio: {
    type: String,
    required: true,
    maxlength: 30
  }
  
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    }
  }
});

schema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'movie'
});

module.exports = mongoose.model('Movie', schema);

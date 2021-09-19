const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const TagModel = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});

module.exports = model('Tag', TagModel);
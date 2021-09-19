const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CategoryModel = new Schema({
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

module.exports = model('Category', CategoryModel);
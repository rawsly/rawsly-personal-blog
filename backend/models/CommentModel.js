const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CommentModel = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  parentComment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
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

module.exports = model('Tag', CommentModel);
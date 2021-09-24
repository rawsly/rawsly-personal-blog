const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const POST_STATUS = require('./enums/PostStatus');

const PostModel = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  primaryCategory: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    }
  ],
  featuredImage: String,
  duration: Number,
  status: {
    type: String,
    enum: POST_STATUS,
    required: true,
    default: 'DRAFT'
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],

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

module.exports = model('Post', PostModel);
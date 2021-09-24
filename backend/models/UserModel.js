const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const USER_STATUS = require('./enums/UserStatus');
const ROLE = require('./enums/Role');

const UserModel = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  profilePhoto: String,
  status: {
    type: String,
    enum: USER_STATUS,
    required: true,
    default: 'AWAITING_APPROVAL'
  },
  bookmarkedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    }
  ],
  role: {
    type: String,
    enum: ROLE,
    required: true,
    default: 'READER',
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

module.exports = model('User', UserModel);
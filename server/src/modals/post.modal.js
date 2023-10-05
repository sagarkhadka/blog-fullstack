const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title requiree']
  },

  body: {
    type: String,
    required: [true, 'Body required']
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updateddAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('post', postSchema)

const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter title']
    },

    description: {
      type: String,
      required: [true, 'Please enter description']
    },

    body: {
      type: String,
      required: [true, 'Please enter blog body']
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('blog', blogSchema)

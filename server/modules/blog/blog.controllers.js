const asyncHandler = require('express-async-handler')

const getBlogs = asyncHandler(async (req, res) => {
  res.status(200).json('found')
})

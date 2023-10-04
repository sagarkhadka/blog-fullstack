const dotenv = require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

connectDB()
const app = express()
port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`port ${port}`)
})

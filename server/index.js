require('dotenv').config()
const expressLayout = require('express-ejs-layouts')

const express = require('express')
const connectDB = require('./config/db')

connectDB()
const app = express()
port = process.env.PORT || 5000

// for static folder
app.use(express.static('public'))

// Templating Engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', require('./src/routes/main'))

app.listen(port, () => {
  console.log(`port ${port}`)
})

const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
  const locals = {
    title: 'NodeJS blog',
    description: 'Simple blog with node, express'
  }
  res.render('index', { locals })
})

router.get('/about', (req, res) => {
  res.render('about')
})

module.exports = router

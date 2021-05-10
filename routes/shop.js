const express = require('express')
const path = require('path')

const router = express.Router()
const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/', (req, res) => {
  console.log('Returning Shop Index Page')
  res.render('shop/index', { products: adminData.products, path: req.path })
})

module.exports = router
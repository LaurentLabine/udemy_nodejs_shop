const express = require('express')
const path = require('path')

const router = express.Router()
const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/', (req, res) => {
  console.log('Redirected to Users Get')
  res.render('users', { users: adminData.users, path: req.path })
})

module.exports = router
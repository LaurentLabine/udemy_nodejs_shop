const express = require('express')
const path = require('path')

const router = express.Router()
const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/users', (req, res) => {
  console.log("Here")
  console.log(adminData.users)
  res.render('users', { users: adminData.users })
})

module.exports = router
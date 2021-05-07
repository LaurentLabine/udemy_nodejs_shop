const rootDir = require('../util/path')
const express = require('express')
const router = express.Router()
const path = require('path')
const users = []

router.get('/', (req, res) => {
  console.log("You made it to admin route get!")
  console.log(path.join(rootDir, 'views', 'homepage.pug'))
  res.render('homepage');
})

router.post('/', (req, res) => {
  users.push({ username: req.body.username })
  console.log("Pushed!")
  console.log(users)
  res.render('homepage', { users: users });
})

exports.routes = router
exports.users = users
const rootDir = require('../util/path')
const express = require('express')
const router = express.Router()
const path = require('path')
const users = []

router.get('/add-user', (req, res) => {
  res.render('add-user', { pateTitle: 'Add user', path: '/admin/add-user' });
})

router.post('/add-user', (req, res) => {
  console.log('Admin add user reached')
  users.push({ username: req.body.username })
  console.log(users)
  res.redirect('/')
})

exports.routes = router
exports.users = users
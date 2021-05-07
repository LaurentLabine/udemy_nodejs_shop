const express = require('express')
const rootDir = require('../util/path')
const path = require('path')

const userRouter = express.Router();

userRouter.get('/users', (req, res) => {
  console.log('users route')
  res.sendFile(path.join(rootDir, 'views', 'users.html'))
})

module.exports = userRouter
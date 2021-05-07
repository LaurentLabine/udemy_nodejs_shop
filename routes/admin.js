const express = require("express")
const path = require("path")

const rootDir = require('../util/path')
const adminRouter = express.Router()

adminRouter.get('/', (req, res) => {
  console.log("admin route works!")
  res.sendFile(path.join(rootDir, 'views', 'homepage.html'))
})

module.exports = adminRouter
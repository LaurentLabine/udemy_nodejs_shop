const express = require('express')
const adminData = require('./routes/admin')
const userRoutes = require('./routes/users')
const path = require('path')

const app = express();
const port = 8080;

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(adminData.routes)
app.use(userRoutes)
app.use(express.static(path.join(__dirname, 'public')))

app.get((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
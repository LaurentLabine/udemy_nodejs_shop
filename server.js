const express = require('express')
const app = express()

const port = 3000

// app.use((req, res, next) => {
//   console.log("Middleware 1")
//   next()
// })

// app.get('/', (req, res) => {
//   console.log("Middleware 2")
//   res.send("Hello This is my express js server")
// })

app.use('/users', (req, res) => {
  console.log("users")
  res.send("You've reached users endpoint")
})

app.use('/', (req, res) => {
  console.log("/")
  res.send('You\'ve reached the root')
})

app.listen(port, () => {
  console.log(`Server is up at ${port}`)
})
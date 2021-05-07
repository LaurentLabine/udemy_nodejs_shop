const express = require("express")
const path = require("path")
const userRouter = require("./routes/users")
const adminRouter = require("./routes/admin")
const app = express()
const PORT = process.env.PORT || 5000

app.use(userRouter)
app.use(adminRouter)
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


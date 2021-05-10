const path = require('path');

const express = require('express');

const errorController = require('./controllers/error');

const app = express();
const port = 8080;

app.set('views', './views')
app.set('view engine', 'pug')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

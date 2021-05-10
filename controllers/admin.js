const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
  res.render('admin/add-propduct', {
    pageTitle: 'Add Product',
    path: '/admin/add-propduct',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}

exports.postAddProduct = (req, res) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const proce = req.body.price
  const description = req.body.description
  const product = new Product(title, imageUrl, description, price)
  product.save()
  res.redirect('/')
}

exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
  })
}
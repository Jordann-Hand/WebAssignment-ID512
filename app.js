const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

//setup

app.use(express.static('Assets'))
app.set('view engine', 'ejs')
app.set('views', './views')

const index_router = require('./routes/index')
const products_router = require('./routes/products')

app.use("/", index_router)
app.use("/products", products_router)

app.get('/teas', (req, res) => {
    res.render("partials/teas") //return
  })
app.get('/aboutus', (req, res) => {
   res.render("partials/aboutus") //return
 })
app.get('/brewwares', (req, res) => {
    res.render("partials/brewwares") //return
  })
app.get('/cart', (req, res) => {
    res.render("partials/cart") //return
  })
app.get('/merch', (req, res) => {
    res.render("partials/merch") //return
  })
app.get('/wholesale', (req, res) => {
    res.render("partials/wholesale") //return
  })

  //routes

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
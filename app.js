const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 //for heroku and localhost

//setup

app.use(express.static('Assets'))
app.set('view engine', 'ejs')
app.set('views', './views')

const index_router = require('./routes/index')
const products_router = require('./routes/products')
const teas_router = require('./routes/teas')
const brewwares_router = require('./routes/brewwares')

app.use("/", index_router)
app.use("/products", products_router)
app.use("/products/teas", products_router)
app.use("/products/brewwares", products_router)
app.use("/teas", teas_router)
app.use("/brewwares", brewwares_router)

//Links pages that i did not create routes for because i did not recreate them 
app.get('/aboutus', (req, res) => {
   res.render("partials/aboutus") //return
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
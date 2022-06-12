const express = require('express')
const app = express()
const PORT = 3000

//setup

app.use(express.static('Assets'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render("index") //return
  })

app.get('/users', (req, res) => {
    res.send('Users page') //return
  })

app.get('/api', (req, res) => {
    let data = {
        "name" : "Jordan"
    }
    res.send(data) //return
  })


  //routes

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
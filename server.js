const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3002, function () {
  console.log('Example app listening on port 3002!')
})

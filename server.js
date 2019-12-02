const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index')
})

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

const bodyParser = require('body-parser');
// ...
// ...
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3002, function () {
  console.log('Example app listening on port 3002!')
})

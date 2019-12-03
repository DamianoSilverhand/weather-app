const express = require('express');
const app = express();
const request = require('request');
const apiKey ='4176b01f3b069bf25ca0ad38079389b6'
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.render('index')
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees, ${weather.main.pressure} pascals and humidity of ${weather.main.humidity}, with ${weather.weather[0].description} in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})



app.listen(3002, function () {
  console.log('Example app listening on port 3002!')
})

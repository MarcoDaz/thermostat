const { response, request } = require('express');
const express = require('express');
const Thermostat = require('./thermostat');

const app = express();
const port = 9292;

app.use(express.urlencoded({ extended: false }));

let thermostat = new Thermostat();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});


// Implement a route GET /temperature to print the thermostat temperature.
app.get('/temperature', (req, res) => {
  const info = {
    temperature: thermostat.getTemperature(),
    powersaving: thermostat.getPowerSavingMode()
  };
  res.json(info);
});

// Implement a route POST /up to increase the temperature.
app.post('/up', (req, res) => {
  thermostat.up();
  res.send('POST succeeded')
});

// Implement a route POST /down to decrease the temperature.
app.post('/down', (req, res) => {
  thermostat.down();
  res.send('POST succeeded')
});

// POST /powersaving-on
app.post('/powersaving-on', (req, res) => {
  thermostat.setPowerSavingMode(true);

  res.send('POST succeeded')
});

// POST /powersaving-off
app.post('/powersaving-off', (req, res) => {
  thermostat.setPowerSavingMode(false);
  
  res.send('POST succeeded')
});

// Implement a route DELETE /temperature to reset the thermostat.
app.post('/reset', (req, res) => {
  thermostat.resetTemperature();
  res.send('POST succeeded')
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
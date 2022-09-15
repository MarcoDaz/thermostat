const { response, request } = require('express');
const express = require('express');
const Thermostat = require('./thermostat');

const app = express();
const port = 9292;

app.use(express.urlencoded({ extended: false }));

let thermostat = new Thermostat();

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
  res.redirect('/temperature');
});

// Implement a route POST /down to decrease the temperature.
app.post('/down', (req, res) => {
  thermostat.down();
  res.redirect('/temperature');
});

// POST /powersaving to alternate powersavingmode
app.post('/powersaving', (req, res) => {
  if (req.body.mode === 'true') {
    thermostat.setPowerSavingMode(true);
  }
  else {
    thermostat.setPowerSavingMode(false);
  };

  res.redirect('/temperature');
});

// Implement a route DELETE /temperature to reset the thermostat.
app.delete('/temperature', (req, res) => {
  thermostat = new Thermostat();
  res.redirect('/temperature');
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
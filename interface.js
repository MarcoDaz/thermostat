document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.getTemperature();
    
    if (thermostat.energyUsage() === 'low-usage') {
      document.querySelector('#temperature').style.color = 'green';
    } else if (thermostat.energyUsage() === 'medium-usage') {
      document.querySelector('#temperature').style.color = 'black';
    } else {
      document.querySelector('#temperature').style.color = 'red';
    }
  }

  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.setPowerSavingMode(true);
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  })

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.setPowerSavingMode(false);
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  })
});
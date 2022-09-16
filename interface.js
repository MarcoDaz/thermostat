document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    fetch('http://localhost:9292/temperature')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#temperature').innerText = data.temperature;
      })
      .catch((error) => {
        console.log('error..oops')
      })
  }

  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
  
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp;
      })
  })

  // const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    fetch('http://localhost:9292/up', { method: 'POST' }).then((res) => {
      updateTemperature();
    })
  });

  // document.querySelector('#temperature-down').addEventListener('click', () => {
  //   thermostat.down();
  //   updateTemperature();
  // });

  // document.querySelector('#temperature-reset').addEventListener('click', () => {
  //   thermostat.resetTemperature();
  //   updateTemperature();
  // });

  // document.querySelector('#powersaving-on').addEventListener('click', () => {
  //   thermostat.setPowerSavingMode(true);
  //   document.querySelector('#power-saving-status').innerText = 'on';
  //   updateTemperature();
  // })

  // document.querySelector('#powersaving-off').addEventListener('click', () => {
  //   thermostat.setPowerSavingMode(false);
  //   document.querySelector('#power-saving-status').innerText = 'off';
  //   updateTemperature();
  // })
});
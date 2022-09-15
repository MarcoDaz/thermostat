class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemp = 25;
    this.powersaving = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemp) {
      this.temperature++;
    };
  }

  down() {
    if (this.temperature > this.minTemperature) {
      this.temperature--;
    };
  }

  setPowerSavingMode(bool) {
    this.powersaving = bool;
    this.maxTemp = bool ? 25 : 32;
    this.temperature = this.temperature > this.maxTemp ?
      this.maxTemp : this.temperature;
  }

  getPowerSavingMode() {
    return this.powersaving;
  }

  resetTemperature() {
    this.temperature = 20;
  }
};

module.exports = Thermostat;
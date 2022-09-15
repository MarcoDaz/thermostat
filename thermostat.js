class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemp = 25;
    this.powersaving = true;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
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

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
};

module.exports = Thermostat;
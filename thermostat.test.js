const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  describe('#getTemperature', () => {
    it('constructs', () => {
      const thermostat = new Thermostat;
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });
  
  describe('#up', () => {
    it('increases the temperature by 1 each time', () => {
      const thermostat = new Thermostat;
      thermostat.up();
      thermostat.up();

      expect(thermostat.getTemperature()).toEqual(22);
    });

    it('can not increase temperature above 25 by default', () => {
      const thermostat = new Thermostat;
      // temp is set to 20 by default
      for (let i = 0; i < 10; i++) {
        thermostat.up();
      };

      expect(thermostat.getTemperature()).toEqual(25);
    });
  });

  describe('#down', () => {
    it('decreases the temperature by 1 each time', () => {
      const thermostat = new Thermostat;
      thermostat.down();
      thermostat.down();

      expect(thermostat.getTemperature()).toEqual(18);
    });
    
    it('can not decrease temperature to below 10 ', () => {
      const thermostat = new Thermostat;
      // temp is set to 20 by default
      for (let i = 0; i < 15; i++) {
        thermostat.down();
      };

      expect(thermostat.getTemperature()).toEqual(10);
    });
  });

  describe('#setPowerSavingMode', () => {
    it('lets temperature go up to 32 but not above if set to false', () => {
      const thermostat = new Thermostat;

      thermostat.setPowerSavingMode(false);
      // temp is set to 20 by default
      for (let i = 0; i < 20; i++) {
        thermostat.up();
      }

      expect(thermostat.getTemperature()).toEqual(32);
    });

    it('sets the temperature to 25 if above that when turned on', () => {
      const thermostat = new Thermostat;

      thermostat.setPowerSavingMode(false);
      // temp is set to 20 by default
      for (let i = 0; i < 20; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32);

      thermostat.setPowerSavingMode(true);
      expect(thermostat.getTemperature()).toEqual(25);
    });
  });
});
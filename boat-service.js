var util = require('util');
var bleno = require('../..');

var BoarSensorCharacteristic = require('./boat-sensor-characteristic');

function BoatService(boat) {
    bleno.PrimaryService.call(this, {
        uuid: '13333333333333333333333333333337',
        characteristics: [
            new BoarSensorCharacteristic(pizza)
        ]
    });
}

util.inherits(BoatService, bleno.PrimaryService);

module.exports = BoatService;
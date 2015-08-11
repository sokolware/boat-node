var util = require('util');
var events = require('events');

var BoatSensors = {
  RPM:          0,
  OIL_TEMP:     1,
  FUEL_LEVEL:   2,
};


function Boat() {
  events.EventEmitter.call(this);
  this.sensors = [BoatSensors.RPM, OIL_TEMP];
}

util.inherits(Boat, events.EventEmitter);

Pizza.prototype.check = function(sensor) {
  this.emit('ready', 10);
};

module.exports.Boat = Boat;
module.exports.BoatSensors = BoatSensors;
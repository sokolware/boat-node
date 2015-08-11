var util = require('util');
var bleno = require('../..');
var boat = require('./boat');

function BoatSensorCharacteristic(boat) {
  bleno.Characteristic.call(this, {
    uuid: '13333333333333333333333333330001',
    properties: ['read', 'write'],
    descriptors: [
      new bleno.Descriptor({
        uuid: '2901',
        value: 'Gets or sets the type of pizza crust.'
      })
    ]
  });

  this.boat = boat;
}

util.inherits(BoatSensorCharacteristic, bleno.Characteristic);

BoatSensorCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG);
  }
  else if (data.length !== 1) {
    callback(this.RESULT_INVALID_ATTRIBUTE_LENGTH);
  }
  else {
    var crust = data.readUInt8(0);
  }
};

BoatSensorCharacteristic.prototype.onReadRequest = function(offset, callback) {
  if (offset) {
    callback(this.RESULT_ATTR_NOT_LONG, null);
  }
  else {
    var data = new Buffer(1);
    //data.writeUInt8(this.pizza.crust, 0);
    callback(this.RESULT_SUCCESS, data);
  }
};

module.exports = BoatSensorCharacteristic;
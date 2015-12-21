/**
 * User model events
 */

'use strict';

var _events = require('events');

var _sqldb = require('../../sqldb');

var UserEvents = new _events.EventEmitter();

// Set max event listeners (0 == unlimited)
UserEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  _sqldb.User.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function (doc, options, done) {
    UserEvents.emit(event + ':' + doc._id, doc);
    UserEvents.emit(event, doc);
    done(null);
  };
}

module.exports = UserEvents;
//# sourceMappingURL=user.events.js.map

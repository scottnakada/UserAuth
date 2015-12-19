/**
 * Main application file
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _configEnvironment = require('./config/environment');

var _configEnvironment2 = _interopRequireDefault(_configEnvironment);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

// Setup server
var app = (0, _express2['default'])();
var server = _http2['default'].createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
  server.listen(_configEnvironment2['default'].port, _configEnvironment2['default'].ip, function () {
    console.log('Express server listening on %d, in %s mode', _configEnvironment2['default'].port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
//# sourceMappingURL=app.js.map

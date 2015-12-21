/**
 * Main application routes
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _componentsErrors = require('./components/errors');

var _componentsErrors2 = _interopRequireDefault(_componentsErrors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

module.exports = function (app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(_componentsErrors2['default'][404]);

  // All other routes should redirect to the index.html
  app.route('/*').get(function (req, res) {
    res.sendFile(_path2['default'].resolve(app.get('appPath') + '/index.html'));
  });
};
//# sourceMappingURL=routes.js.map

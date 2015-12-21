'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _authService = require('../auth.service');

var _authService2 = _interopRequireDefault(_authService);

var router = _express2['default'].Router();

router.get('/', _passport2['default'].authenticate('google', {
  failureRedirect: '/signup',
  scope: ['profile', 'email'],
  session: false
})).get('/callback', _passport2['default'].authenticate('google', {
  failureRedirect: '/signup',
  session: false
}), _authService2['default'].setTokenCookie);

module.exports = router;
//# sourceMappingURL=index.js.map

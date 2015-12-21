'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('./user.controller');

var _userController2 = _interopRequireDefault(_userController);

var _authAuthService = require('../../auth/auth.service');

var _authAuthService2 = _interopRequireDefault(_authAuthService);

var router = _express2['default'].Router();

router.get('/', _authAuthService2['default'].hasRole('admin'), _userController2['default'].index);
router['delete']('/:id', _authAuthService2['default'].hasRole('admin'), _userController2['default'].destroy);
router.get('/me', _authAuthService2['default'].isAuthenticated(), _userController2['default'].me);
router.put('/:id/password', _authAuthService2['default'].isAuthenticated(), _userController2['default'].changePassword);
router.get('/:id', _authAuthService2['default'].isAuthenticated(), _userController2['default'].show);
router.post('/', _userController2['default'].create);

module.exports = router;
//# sourceMappingURL=index.js.map

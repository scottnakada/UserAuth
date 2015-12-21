'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _configEnvironment = require('../config/environment');

var _configEnvironment2 = _interopRequireDefault(_configEnvironment);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _composableMiddleware = require('composable-middleware');

var _composableMiddleware2 = _interopRequireDefault(_composableMiddleware);

var _sqldb = require('../sqldb');

var validateJwt = (0, _expressJwt2['default'])({
  secret: _configEnvironment2['default'].secrets.session
});

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function isAuthenticated() {
  return (0, _composableMiddleware2['default'])()
  // Validate jwt
  .use(function (req, res, next) {
    // allow access_token to be passed through query parameter as well
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = 'Bearer ' + req.query.access_token;
    }
    validateJwt(req, res, next);
  })
  // Attach user to request
  .use(function (req, res, next) {
    _sqldb.User.find({
      where: {
        _id: req.user._id
      }
    }).then(function (user) {
      if (!user) {
        return res.status(401).end();
      }
      req.user = user;
      next();
    })['catch'](function (err) {
      return next(err);
    });
  });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
function hasRole(roleRequired) {
  if (!roleRequired) {
    throw new Error('Required role needs to be set');
  }

  return (0, _composableMiddleware2['default'])().use(isAuthenticated()).use(function meetsRequirements(req, res, next) {
    if (_configEnvironment2['default'].userRoles.indexOf(req.user.role) >= _configEnvironment2['default'].userRoles.indexOf(roleRequired)) {
      next();
    } else {
      res.status(403).send('Forbidden');
    }
  });
}

/**
 * Returns a jwt token signed by the app secret
 */
function signToken(id, role) {
  return _jsonwebtoken2['default'].sign({ _id: id, role: role }, _configEnvironment2['default'].secrets.session, {
    expiresInMinutes: 60 * 5
  });
}

/**
 * Set token cookie directly for oAuth strategies
 */
function setTokenCookie(req, res) {
  if (!req.user) {
    return res.status(404).send('Something went wrong, please try again.');
  }
  var token = signToken(req.user._id, req.user.role);
  res.cookie('token', token);
  res.redirect('/');
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;
//# sourceMappingURL=auth.service.js.map

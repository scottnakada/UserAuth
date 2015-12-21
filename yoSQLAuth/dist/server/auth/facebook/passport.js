'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportFacebook = require('passport-facebook');

exports.setup = function (User, config) {
  _passport2['default'].use(new _passportFacebook.Strategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: ['displayName', 'emails']
  }, function (accessToken, refreshToken, profile, done) {
    User.find({
      'facebook.id': profile.id
    }).then(function (user) {
      if (!user) {
        user = User.build({
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'user',
          provider: 'facebook',
          facebook: profile._json
        });
        user.save().then(function (user) {
          return done(null, user);
        })['catch'](function (err) {
          return done(err);
        });
      } else {
        return done(null, user);
      }
    })['catch'](function (err) {
      return done(err);
    });
  }));
};
//# sourceMappingURL=passport.js.map

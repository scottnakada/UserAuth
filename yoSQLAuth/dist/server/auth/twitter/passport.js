'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportTwitter = require('passport-twitter');

exports.setup = function (User, config) {
  _passport2['default'].use(new _passportTwitter.Strategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: config.twitter.callbackURL
  }, function (token, tokenSecret, profile, done) {
    User.find({
      'twitter.id_str': profile.id
    }).then(function (user) {
      if (!user) {
        user = User.build({
          name: profile.displayName,
          username: profile.username,
          role: 'user',
          provider: 'twitter',
          twitter: profile._json
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

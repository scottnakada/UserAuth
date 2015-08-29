/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'user@user.com',
    password: 'userPass'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'sysRoot@sysRoot.com',
    password: 'sysRoot'
  }, function() {
      console.log('finished populating users');
    }
  );
});

/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _sqldb = require('../sqldb');

var _sqldb2 = _interopRequireDefault(_sqldb);

var Thing = _sqldb2['default'].Thing;
var User = _sqldb2['default'].User;

Thing.sync().then(function () {
    return Thing.destroy({ where: {} });
}).then(function () {
    Thing.bulkCreate([{
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' + 'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' + 'Stylus, Sass, and Less.'
    }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, ' + 'AngularJS, and Node.'
    }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep ' + 'tests alongside code. Automatic injection of scripts and ' + 'styles into your index.html'
    }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more ' + 'code reusability and maximum scalability'
    }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript ' + 'payload, minifies your scripts/css/images, and rewrites asset ' + 'names for caching.'
    }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku ' + 'and openshift subgenerators'
    }]);
});

User.sync().then(function () {
    return User.destroy({ where: {} });
}).then(function () {
    User.bulkCreate([
    /*
     {
     provider: 'local',
     name: 'Test User',
     email: 'test@example.com',
     password: 'test'
     }, {
     provider: 'local',
     role: 'admin',
     name: 'Admin',
     email: 'admin@example.com',
     password: 'admin'
     }
     */
    {
        provider: 'local',
        name: 'Guest',
        email: 'guest@guest.com',
        password: 'guest'
    }, {
        provider: 'local',
        role: 'guest',
        name: 'Scott Guest',
        email: 'scottnakada@gmail.com',
        password: 'pass'
    }, {
        provider: 'local',
        role: 'admin',
        name: 'Scott Admin',
        email: 'sn@gmail.com',
        password: 'pass'
    }, {
        provider: 'local',
        role: 'user',
        name: 'Scott User',
        email: 'smn@gmail.com',
        password: 'pass'
    }]).then(function () {
        console.log('finished populating users');
    });
});
//# sourceMappingURL=seed.js.map

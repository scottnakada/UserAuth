'use strict';

angular.module('ionFireAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.register', {
        url: '/register',
          views: {
            'menuContent': {
              templateUrl: "templates/register.html",
              controller: 'RegisterCtrl'
            }
          }
      });
  });
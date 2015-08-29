'use strict';

angular.module('ionFireAuthApp')
    .config(function ($stateProvider) {
      $stateProvider
          .state('app.admin', {
            url: '/admin',
            views: {
              'menuContent': {
                templateUrl: "templates/admin.html",
                controller: 'AdminCtrl'
              }
            }
          });
    });
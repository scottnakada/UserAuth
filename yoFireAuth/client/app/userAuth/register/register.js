'use strict';

angular.module('yoFireAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/userAuth/register/register.html',
        controller: 'RegisterCtrl'
      });
  });

'use strict';

angular.module('yoFireAuthApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('changePass', {
        url: '/changePass',
        templateUrl: 'app/userAuth/changePass/changePass.html',
        controller: 'ChangePassCtrl'
      });
  });

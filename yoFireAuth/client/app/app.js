'use strict';

angular.module('yoFireAuthApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'firebase',
  'toaster',
  'angularMoment',
  'ui.router',
  'ui.bootstrap'
])

  // Define the constant which defines the Firebase database for this project
  .constant('FURL', 'https://geowoding.firebaseio.com/')

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $locationProvider.html5Mode(true);
  });

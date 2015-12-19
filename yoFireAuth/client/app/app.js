'use strict';

angular.module('yoFireAuthApp', [
    'yoFireAuthApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'toaster',
    'firebase'
])

    // Define the constant which defines the Firebase database for this project
    .constant('FURL', 'https://geowoding.firebaseio.com/')

    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
);

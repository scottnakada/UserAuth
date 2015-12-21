'use strict';

angular.module('yoSqlauthApp', [
    'yoSqlauthApp.auth',
    'yoSqlauthApp.admin',
    'yoSqlauthApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'validation.match',
    'toaster'
])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });

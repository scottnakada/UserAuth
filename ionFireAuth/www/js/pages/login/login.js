'use strict';

angular.module('ionFireAuthApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: "templates/login.html",
                        controller: 'LoginCtrl'
                    }
                }
            });
    });
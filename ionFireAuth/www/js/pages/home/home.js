'use strict';

angular.module('ionFireAuthApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeCtrl'
                    }
                }
            });
    });
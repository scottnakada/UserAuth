'use strict';

angular.module('yoFireAuthApp')

    .controller('RegisterCtrl', function ($scope, Auth, $state, toaster) {

        // Don't allow registering if you are logged in
        if (Auth.signedIn()) {
            toaster.pop('error', "Please log out, before attempting to register");
            // If logged in, redirect to the home page
            $state.go('main');
        }

        $scope.register = function (user) {
            Auth.register(user);
        };

    }
);

'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoFireAuthApp')
        /* Define the AdminCtrl Controller */
        .controller('AdminCtrl', function ($scope, Auth, toaster, $state) {

            // Make sure the user is an Admin before showing this page
            if (!Auth.isAdmin()) {
                toaster.pop('error', 'You need Admin privileges to access this page');
                // See if they are signed In
                if (!Auth.signedIn()) {
                    // Not logged in, go to the login page
                    $state.go('login');
                } else {
                    // Not authorized for this page; go back to the store
                    $state.go('main')
                }
            }

            // Provide access to the list of user profiles
            $scope.users = Auth.all;

        }
    );

}());
/* Close the IIFE */

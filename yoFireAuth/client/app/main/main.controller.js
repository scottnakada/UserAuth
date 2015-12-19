'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */


    class MainController {

        constructor($scope, $state, Auth, toaster) {

            /* Pull in the current user information from the Auth Factory */
            this.currentUser = Auth.user;

            /* Return true if the user is signed in */
            this.signedIn = Auth.signedIn;

            /* Return true if the user has Manager permissions (or Admin) */
            this.isManager = Auth.isManager;

            /* Return true if the user has Admin permissions */
            this.isAdmin = Auth.isAdmin;

            /* Return true if the user is a simple pass user, so changing password is ok */
            this.changePassOk = Auth.changePassOk;

            /* Handle Logout */
            this.logout = function () {
                toaster.pop('success', "Logged out successfully");
                Auth.logout();
                $state.go('main');
            }

        }
    }

    angular.module('yoFireAuthApp')
        .controller('MainController', MainController);

})();
/* Close the IIFE */

'use strict';

class NavbarController {
    //start-non-standard
    /* Define the Navbar Menu items */
    menu = [
        /*
        {
            'title': 'Home',
            'state': 'main'
        }
        */
    ];

    /* Is the Nav Bar collapsed? */
    isCollapsed = true;

    /* Is this route the selected route */
    isActive = function (route) {
        return route === $location.path();
    };


    //end-non-standard

    constructor($state, Auth, toaster) {

        this.Auth = Auth;

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

        /* Logout the user */
        this.logout = function () {
            toaster.pop('success', "Logged out successfully");
            Auth.logout();
            $state.go('main');
        }

    }
}

angular.module('yoFireAuthApp')
    .controller('NavbarController', NavbarController);

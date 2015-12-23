'use strict';

angular.module('yoFireAuthApp')

    // Define the ChangePass Controller
    .controller('ChangePassCtrl', function ($scope, FURL, Auth, $state, toaster) {

        $scope.currentUser = Auth.user;
        $scope.email = $scope.currentUser.profile.email;
        console.log("currentUser: ", $scope.currentUser);
        console.log("currentUser.provider: ", $scope.currentUser.provider);
        console.log("currentUser.auth: ", $scope.currentUser.auth);
        console.log("currentUser.profile: ", $scope.currentUser.profile);
        console.log("currentUser.email: ", $scope.currentUser.profile.email);

        $scope.changePassword = function (user) {

            Auth.changePassword(user)
                .then(function () {

                    // Reset form
                    $scope.user.email = '';
                    $scope.user.oldPass = '';
                    $scope.user.newPass = '';

                    toaster.pop('success', "Password changed successfully");
                    console.log("Password changed successfully");
                }, function (error) {
                    if (error) {
                        toaster.pop('error', "Oops! Something went wrong changing password." + error);
                        switch (error.code) {
                            case "AUTHENTICATION_DISABLED":
                                toaster.pop('error', "The requested authentication provider is disabled for this Firebase.");
                                break;
                            case "INVALID_EMAIL":
                                toaster.pop('error', "The specified user account email is invalid.");
                                break;
                            case "INVALID_ORIGIN":
                                toaster.pop('error', "A security error occurred while processing the " +
                                    "authentication request. The web origin for the request is not in " +
                                    "your list of approved request origins. To approve this origin, " +
                                    "visit the Login & Auth tab in your Firebase dashboard.");
                                break;
                            case "INVALID_PASSWORD":
                                toaster.pop('error', "The specified user account password is incorrect.");
                                break;
                            case "INVALID_USER":
                                toaster.pop('error', "The specified user account does not exist.");
                                break;
                            case "NETWORK_ERROR":
                                toaster.pop('error', "An error occurred while attempting to contact the authentication server");
                                break;
                            case "TRANSPORT_UNAVAILABLE":
                                toaster.pop('error', "The requested login method is not available in the user's browser " +
                                    "environment. Popups are not available in Chrome for iOS, iOS Preview Panes, or " +
                                    "local, file:// URLs. Redirects are not available in PhoneGap / Cordova, or local, file:// URLs.");
                                break;
                            case "UNKNOWN_ERROR":
                                toaster.pop('error', "An unknown error occurred. Please refer to the error message " +
                                    "and error details for more information.");
                                break;

                            default:
                                toaster.pop('error', "Error logging user in:", error);
                        }
                    }

                });
        };

    }
);

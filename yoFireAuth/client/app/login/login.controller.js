'use strict';

angular.module('yoFireAuthApp')

  // Define the Login Controller
  .controller('LoginCtrl', function ($scope, FURL, Auth, $location, toaster) {

    // Don't allow login if you are logged in
    if (Auth.signedIn()) {
      toaster.pop('error', "Please logout before attempting to login");
      // If logged in, redirect to the home page
      $location.path('/home');
    }

    $scope.loginFb = function () {
      Auth.loginFacebook();
    };

    $scope.loginGl = function () {
      Auth.loginGoogle();
    };

    $scope.loginTw = function () {
      Auth.loginTwitter();
    };

    $scope.loginGb = function () {
      Auth.loginGithub();
    };

    $scope.login = function (user) {
      Auth.login(user);
    };

  });

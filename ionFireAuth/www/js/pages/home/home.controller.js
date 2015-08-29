'use strict';

angular.module('ionFireAuthApp')

  // Define the Login Controller
  .controller('HomeCtrl', function ($scope, $location, $state, Auth) {

    // Bring the signedIn function from Auth into this scope
    $scope.signedIn = Auth.signedIn;

    // Bring the isAdmin function from Auth into this scope
    $scope.isAdmin = Auth.isAdmin;

    // Bring the logout function from Auth into this scope
    $scope.logout = Auth.logout;

    $scope.go = function (state) {

      $state.go(state);

    }

  });

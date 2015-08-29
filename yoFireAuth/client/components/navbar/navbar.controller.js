'use strict';

angular.module('yoFireAuthApp')

  .controller('NavbarCtrl', function ($scope, $location, Auth, toaster) {
    $scope.menu = [
     /*
      {
        'title': 'Home',
        'link': '/home'
      }
      */
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      return route === $location.path();
    };

    $scope.currentUser = Auth.user;

    $scope.signedIn = Auth.signedIn;

    $scope.logout = function () {
      toaster.pop('success', "Logged out successfully");
      Auth.logout();
      $location.path('/');
    }

  });

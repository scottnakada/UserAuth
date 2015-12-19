'use strict';

describe('Controller: ChangePassCtrl', function () {

  // load the controller's module
  beforeEach(module('yoFireAuthApp'));

  var ChangePassCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChangePassCtrl = $controller('ChangePassCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

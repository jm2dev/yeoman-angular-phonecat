'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanAngularPhonecatApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should create "phones" model with 3 phones', function () {
    expect(scope.phones.length).toBe(3);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });
});

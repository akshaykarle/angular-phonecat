'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function PhoneListCtrl($scope) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
});

phonecatApp.controller('PhoneDetailCtrl', function PhoneDetailCtrl($scope, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
});

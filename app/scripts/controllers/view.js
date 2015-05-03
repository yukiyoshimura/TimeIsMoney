'use strict';

/**
 * @ngdoc function
 * @name TimeIsMoneyApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the TimeIsMoneyApp
 */
angular.module('TimeIsMoneyApp')
  .controller('ViewCtrl', function ($scope) {
    $scope.max = 200;
    $scope.hourMax  = 24;
    $scope.dayMax   = 30;
    $scope.weekMax  = 7;
    $scope.monthMax = 12;
    $scope.yearMax  = 30;


    $scope.hourValue = Math.floor((Math.random() * 100) + 1);
    $scope.dayValue = Math.floor((Math.random() * 100) + 1);
    $scope.weekValue = Math.floor((Math.random() * 100) + 1);
    $scope.monthValue = Math.floor((Math.random() * 100) + 1);
/*
     $scope.random = function() {
       var value = Math.floor((Math.random() * 100) + 1);
       var type;

       if (value < 25) {
         type = 'success';
       } else if (value < 50) {
         type = 'info';
       } else if (value < 75) {
         type = 'warning';
       } else {
         type = 'danger';
       }

       $scope.showWarning = (type === 'danger' || type === 'warning');

       $scope.dynamic = value;
       $scope.type = type;
     };
     $scope.random();
*/


/*
     $scope.randomStacked = function() {
       $scope.stacked = [];
       var types = ['success', 'info', 'warning', 'danger'];

       for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
           var index = Math.floor((Math.random() * 4));
           $scope.stacked.push({
             value: Math.floor((Math.random() * 30) + 1),
             type: types[index]
           });
       }
     };
     $scope.randomStacked();
*/
   });

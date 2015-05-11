'use strict';

/**
 * @ngdoc function
 * @name TimeIsMoneyApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the TimeIsMoneyApp
 */
angular.module('TimeIsMoneyApp')
  .controller('ViewCtrl',['$scope','util',function ($scope,util) {
    $scope.userBirthFlag = false;
    $scope.max = 200;
    $scope.hourMax  = 24;
    $scope.dayMax   = 30;
    $scope.weekMax  = 7;
    $scope.monthMax = 12;
    $scope.yearMax  = 30;
    $scope.avgAge = 70;
    $scope.userHourBirth = 'XXX';
    $scope.userDayBirth = 'XXX';
    $scope.userMonthBirth = 0;

    $scope.userHourTarget = 'XXX';
    $scope.userDayTarget = 'XXX';
    $scope.userMonthTarget = 0;

    $scope.userHourBetween = 'XXX';
    $scope.userDayBetween = 'XXX';
    $scope.userMonthBetween = 0;

    $scope.dayValue = util.getSystemDate().day;
    $scope.hourValue = util.getSystemDate().hour;
    $scope.monthValue = util.getSystemDate().month;

    $scope.hourPercent = Math.round(util.getSystemDate().hour / $scope.hourMax * 100);
    $scope.dayPercent = Math.round(util.getSystemDate().day / $scope.dayMax * 100);
    $scope.monthPercent = Math.round(util.getSystemDate().month / $scope.monthMax * 100);

//    console.log(util.getSystemDate().day);
//    console.log(util.getSystemDate().hour);
//    console.log(util.getSystemDate().year);


    $scope.getBirth = function(birthday) {
      $scope.userBirthFlag = true;
      var userDate = new Date(birthday);
      var diff = ((util.getSystemDate().now).getTime() - userDate.getTime()) / 1000;
      //hour
      $scope.userHourBirth = Math.floor(diff /(60*60));
      //day
      $scope.userDayBirth = Math.floor(diff /(60*60*24));

//      console.log('userDate.getTime())' + userDate.getTime() + ' now-->' + (util.getSystemDate().now).getTime());
//      console.log('diff=' + diff);
//      console.log(userDate.getTime());
//      console.log($scope.userHour + ' dayIs' + $scope.userDay);
//      console.log(birthday);

    };


    $scope.getTarget = function(targetday) {
      $scope.userTargetFlag = true;
      var userDate = new Date(targetday);
      //targetday - systemdate
      var diff = (userDate.getTime() - (util.getSystemDate().now).getTime()) / 1000;
      //hour
      $scope.userHourTarget = Math.floor(diff /(60*60));
      //day
      $scope.userDayTarget = Math.floor(diff /(60*60*24));
      $scope.MaxDayTarget = $scope.userDayTarget;


//      console.log('userDate.getTime())' + userDate.getTime() + ' now-->' + (util.getSystemDate().now).getTime());
//      console.log('diff=' + diff);
//      console.log(userDate.getTime());
//      console.log($scope.userHour + ' dayIs' + $scope.userDay);
//      console.log(birthday);

    };



    // A:to - from
    // B:systemdate - from
    // B/A is how past
    $scope.getBetween = function(from,to) {
      $scope.userFromToFlag = true;
      var userDateFr = new Date(from);
      var userDateTo = new Date(to);
      //targetday - fromdate
      var diffFrTo = (userDateTo.getTime() - userDateFr.getTime()) / 1000;
      //systemdate - fromdate
      var diffFrNow = ((util.getSystemDate().now).getTime() - userDateFr.getTime()) / 1000;

      //convert
      //frto
      //hour
      $scope.userHourBetween = Math.floor(diff /(60*60));
      //day
      $scope.userDayBetween = Math.floor(diff /(60*60*24));
      $scope.MaxDayBetween = $scope.userDayBetween;

      //frsysdate
      //hour
      $scope.userHourBetween = Math.floor(diff /(60*60));
      //day
      $scope.userDayBetween = Math.floor(diff /(60*60*24));
      $scope.MaxDayBetween = $scope.userDayBetween;


  //    $scope.hourPercentBetween = Math.round(util.getSystemDate().hour / $scope.hourMax * 100);
      $scope.dayPercentBetween = Math.round(util.getSystemDate().day / $scope.dayMax * 100);
    //  $scope.monthPercentBetween = Math.round(util.getSystemDate().month / $scope.monthMax * 100);
//      console.log('userDate.getTime())' + userDate.getTime() + ' now-->' + (util.getSystemDate().now).getTime());
//      console.log('diff=' + diff);
//      console.log(userDate.getTime());
//      console.log($scope.userHour + ' dayIs' + $scope.userDay);
//      console.log(birthday);

    };

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
   }]);

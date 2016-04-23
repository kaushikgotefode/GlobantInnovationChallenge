(function(){
    'use strict';

    angular.module('starter.controllers').controller('DashCtrl', ['$scope', '$timeout', '$state', function($scope, $timeout, $state){
    	$scope.init = function() {
            $scope.currntUsr = JSON.parse(localStorage.getItem('userObj'));
        }
        $scope.init();
        $scope.message = 'Guys do somethong here - from Dashboard ctrl';

    }]);
})();
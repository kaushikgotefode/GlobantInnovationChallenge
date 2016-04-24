(function(){
    'use strict';

    angular.module('starter.controllers').controller('LocationCtrl', ['$scope', '$timeout', '$state', function($scope, $timeout, $state){
        $scope.locations = {
        	"name":"HSR Layout",
        	"name":"Madiwala",
        	"name":"Koramangala"
        }

        $scope.init = function() {
        	$scope.yourLocation = "hsr";
        };

        $scope.init();

    }]);
})();

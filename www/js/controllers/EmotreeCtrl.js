(function(){
    'use strict';

    angular.module('starter.controllers').controller('EmotreeCtrl', ['$scope', '$timeout', '$state', function($scope, $timeout, $state) {
    	$scope.init = function() {
    		$scope.treeEmo1 = 2;
    		$scope.treeEmo2 = 4;
    		$scope.treeEmo3 = 5;
    		$scope.treeEmo4 = 8;
    	};

    	$scope.init();
    }]);
})();
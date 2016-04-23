(function(){
	'use strict';
	angular.module('starter.controllers').controller('CongratsCtrl', ['$scope', '$timeout', '$state', '$stateParams','sharedService', function($scope, $timeout, $state, $stateParams,sharedService) {
		console.log("hello! ", $state.params);
		$scope.adoptedTree=$state.params.adoptedTree;
				/**
		 * @ngdoc method
		 * @name editTreeProfile
		 * @description Redirecting for editing Tree Profile
		 *
		*/
    $scope.editTreeProfile = function(adoptedTree) {
    	sharedService.setAdoptedTree(adoptedTree);
  		$state.go("app.treeedit");
  	};

	}]);
})();
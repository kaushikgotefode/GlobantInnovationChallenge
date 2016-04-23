(function(){
	'use strict';
	angular.module('starter.controllers').controller('CongratsCtrl', ['$scope', '$timeout', '$state', '$stateParams', function($scope, $timeout, $state, $stateParams) {
		console.log("hello! ", $state.params);

		/**
		 * @ngdoc method
		 * @name editTreeProfile
		 * @description Redirecting for editing Tree Profile
		 *
		*/
    $scope.editTreeProfile = function() {
  		$state.go("app.treeedit");
  	};

	}]);
})();
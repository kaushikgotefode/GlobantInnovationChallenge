(function(){
	'use strict';
	angular.module('starter.controllers').controller('CongratsCtrl', ['$scope', '$timeout', '$state', '$stateParams', function($scope, $timeout, $state, $stateParams) {
		console.log("hello! ", $stateParams); 	
	}]);
})();
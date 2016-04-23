(function(){
    'use strict';

    angular.module('starter.controllers').controller('TreeeditCtrl', ['$scope', '$timeout', '$state', function($scope, $timeout, $state){
			$scope.editTree = function(tree) {
				console.log(tree);
			};   	

    }]);
})();

(function() {
    'use strict';

    angular.module('starter.controllers').controller('TreeeditCtrl', ['$scope', '$timeout', '$state','sharedService', function($scope, $timeout, $state,sharedService) {
        $scope.tree = sharedService.getAdoptedTree();
        $scope.editTree = function(tree) {
        	localStorage.setItem("selectedTree", JSON.stringify(tree));
        	$state.go("app.treeprofile", {id:tree.id});
            };

    }]);
})();

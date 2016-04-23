(function() {
    'use strict';

    angular.module('starter.controllers').controller('AdoptCtrl', ['$scope', '$timeout', '$state', 'treeListService', function($scope, $timeout, $state, treeListService) {
        $scope.treeList = [];
        $scope.message = 'Guys do somethong here - from adopt ctrl';
        treeListService.getData().then(function(response) {
            $scope.treeList = response.data.tree;
        });

        $scope.slideHasChanged = function($index){
			    console.log('slideHasChanged $index=' + $index);
			  };

        $scope.adoptTree = function(tree) {
            console.log(tree);
        }

    }]);
})();

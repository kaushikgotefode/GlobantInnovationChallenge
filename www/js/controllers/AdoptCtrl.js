(function() {
    'use strict';

    angular.module('starter.controllers').controller('AdoptCtrl', ['$scope', '$timeout', '$state', 'treeListService', function($scope, $timeout, $state, treeListService) {
        $scope.treeList = [];
        $scope.message = 'Guys do somethong here - from adopt ctrl';
        treeListService.getData().then(function(response) {
            $scope.treeList = response.data.tree;
        });
        $scope.adoptTree = function(tree) {
            console.log(tree);
        }
        $scope.$on('slideBox.slideChanged', function(event, index) {
            console.log('Slide box has been changed, current index is ' + index);
        });

    }]);
})();

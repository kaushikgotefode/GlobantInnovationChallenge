(function() {
    'use strict';

    angular.module('starter.controllers').controller('DashCtrl', ['$scope', '$timeout', '$state', 'sharedService', function($scope, $timeout, $state, sharedService) {
        $scope.init = function() {
            $scope.currntUsr = JSON.parse(localStorage.getItem('userObj'));
            // $scope.treeList = sharedService.getTreeList();
            $scope.treeList = JSON.parse(localStorage.getItem('treeList'));
        }
        $scope.init();
        $scope.message = 'Guys do somethong here - from Dashboard ctrl';

        $scope.selectedTree=function(data){
        	sharedService.setSelectedTree(data)
        }

    }]);
})();

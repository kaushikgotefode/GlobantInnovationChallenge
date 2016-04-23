(function() {
    'use strict';

    angular.module('starter.controllers').controller('TreeProfileCtrl', ['$scope', '$timeout', '$state', 'sharedService', function($scope, $timeout, $state, sharedService) {
        $scope.init = function() {
            $scope.userDtl = JSON.parse(localStorage.getItem('userObj'));
            $scope.selectedTree = sharedService.getSelectedTree();
            console.log($scope.selectedTree);
        }
        $scope.init();
        $scope.message = 'Guys do somethong here - from tree ctrl';

    }]);
})();

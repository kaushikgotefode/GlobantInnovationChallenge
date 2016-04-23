(function() {
    'use strict';


    angular.module('starter.controllers').controller('AdoptCtrl', ['$scope', '$timeout', '$state', 'treeListService','sharedService', function($scope, $timeout, $state, treeListService,sharedService) {
        $scope.treeList = [];
        $scope.selectedSlideIndex = undefined;

        /**
         * @ngdoc method
         * @name init
         * @description Initilize default required data
         *
         */
        $scope.init = function() {
            $scope.currntUsr = JSON.parse(localStorage.getItem('userObj'));
            treeListService.getData().then(function(response) {
                $scope.treeList = response.data.tree;
                sharedService.setTreeList($scope.treeList);
                localStorage.setItem("treeList", JSON.stringify($scope.treeList));
            });
        };

        /**
         * @ngdoc method
         * @name slideHasChanged
         * @description Getting index of active slide object
         *
         */
        $scope.slideHasChanged = function($index) {
            $scope.selectedSlideIndex = $index + 1;
        };

        /**
         * @ngdoc method
         * @name adoptTree
         * @description Adopting active tree from slider.
         *
         */
        $scope.adoptTree = function() {
            if ($scope.selectedSlideIndex === undefined) {
                $scope.selectedSlideIndex = 1;
            }


            for ($scope.count = 0; $scope.count < $scope.treeList.length; $scope.count++) {
                if ($scope.treeList.indexOf($scope.treeList[$scope.count + 1]) === $scope.selectedSlideIndex) {
                    $state.go("app.congrats", { "adoptedTree": $scope.treeList[$scope.count] });
                    break;
                }
            }
        };

        $scope.init();
    }]);
})();

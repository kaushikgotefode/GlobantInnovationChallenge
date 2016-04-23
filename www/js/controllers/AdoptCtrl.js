(function() {
    'use strict';

    angular.module('starter.controllers').controller('AdoptCtrl', ['$scope', '$timeout', '$state', 'treeListService', function($scope, $timeout, $state, treeListService) {
        $scope.treeList = [];
        $scope.selectedSlideIndex = undefined;
        
        /**
				 * @ngdoc method
				 * @name init
				 * @description Initilize default required data
				 *
				*/
        $scope.init = function() {
	        treeListService.getData().then(function(response) {
	            $scope.treeList = response.data.tree;
	        });
        };

        /**
				 * @ngdoc method
				 * @name slideHasChanged
				 * @description Getting index of active slide object
				 *
				*/
        $scope.slideHasChanged = function($index){
			    console.log('slideHasChanged $index=' + $index);
			    $scope.selectedSlideIndex = $index+1;
			  };

			  /**
				 * @ngdoc method
				 * @name adoptTree
				 * @description Adopting active tree from slider.
				 *
				*/
        $scope.adoptTree = function() {
      		if($scope.selectedSlideIndex === undefined) {
      			$scope.selectedSlideIndex = 1;
      		}
      		
          for($scope.count=0; $scope.count<$scope.treeList.length; $scope.count++) {
          	if($scope.treeList[$scope.count].id === $scope.selectedSlideIndex) {
          		console.log($scope.treeList[$scope.count]);
          		$state.go("app.location", $scope.treeList[$scope.count]);
          	}
          }
        };

        $scope.init();
    }]);
})();

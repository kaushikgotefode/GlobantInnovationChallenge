// (function() {
//     'use strict';

angular.module('starter.controllers').controller('ProfileCtrl', ['$scope', '$timeout', '$state','sharedService', function($scope, $timeout, $state,sharedService) {
	$scope.userDtl=sharedService.getCurrentUser();
    $scope.message = 'Guys do somethong here - from profile ctrl';


}]);
// })();

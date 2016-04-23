(function(){
    'use strict';

    angular.module('starter.controllers').controller('DashCtrl', ['$scope', '$timeout', '$state', function($scope, $timeout, $state){

        $scope.message = 'Guys do somethong here - from Dashboard ctrl';

    }]);
})();
(function() {
    'use strict';

    angular.module('starter.controllers').controller('LoginCtrl', function($scope, $timeout, $state, loginService,sharedService) {

        $scope.loginData = {};

        loginService.getData().then(function(response) {
            $scope.loginData = response;
        });
        // Create the login modal that we will use later
        // $ionicModal.fromTemplateUrl('templates/login.html', {
        // 	scope: $scope
        // }).then(function(modal) {
        // 	$scope.modal = modal;
        // });

        // Triggered in the login modal to close it
        // $scope.closeLogin = function() {
        // 	$scope.modal.hide();
        // };

        // Open the login modal
        // $scope.login = function() {
        // 	$scope.modal.show();
        // };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            
            var loginUser = $scope.loginData.data.login;
            for (var i = 0; i < loginUser.length; i++) {
                var user = loginUser[i];
                if (user.email == $scope.usrname && user.password == $scope.psswrd) {
                    sharedService.setCurrentUser(user);
                    localStorage.setItem("userObj", JSON.stringify(user));
                    if(user.adoptedTrees.length>=2){
                        $state.go('app.dash');
                    }else{
                        $state.go('app.adopt');
                    }
                    
                    break;
                } else {
                    $scope.errorMsg = true;
                }
            }
        };

    });
})();

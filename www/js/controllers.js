angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, loginService, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.init = function () {
    loginService.getData().then(function(response) {
        $scope.loginDetails = response.data.login;
        console.log($scope.loginDetails);
    });
  };

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    for(var i=0; i<$scope.loginDetails.length; i++) {
      console.log($scope.loginDetails[i].email, $scope.loginDetails[i].password);
      if($scope.loginDetails[i].email === $scope.loginData.username && $scope.loginDetails[i].password === $scope.loginData.password) {
        console.log("login successfully");
        $state.go('app.search');
      }else {
        console.log("Invalid Username or Password");
      }
    }

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.init();
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
  // console.log(clientId);
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

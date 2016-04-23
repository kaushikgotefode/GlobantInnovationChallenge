angular.module('starter.services', [])
.service('sharedService', function() {
	this.setCurrentUser = function(data) {
        return this.currentUser = data;
    };
    this.getCurrentUser = function() {
        return this.currentUser;
    };
})
.factory('loginService', function($http) {
    return {
        getData: function() {
            return $http.get('./data/loginData.json').then(function(response) {
                return response;
            }).catch(function(response) {
                return
            })
        }
    };
}).factory('treeListService', function($http) {
    return {
        getData: function() {
            return $http.get('./data/treeProfileData.json').then(function(response) {
                return response;
            }).catch(function(response) {
                return
            })
        }
    };
})
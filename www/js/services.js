angular.module('starter.services', [])

/**
 * @ngdoc service
 * @name loginService
 * @description Getting user data for login cred
 */

.factory('loginService', function($http) {
    return{
    	getData: function() {
	        return $http.get('./data/loginData.json').then(function(response) {
	            return response;
	        }).catch(function(response){
	         return
	      })
	    }
    };
});
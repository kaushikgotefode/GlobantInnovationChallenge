angular.module('starter.services', [])

/**
 * @ngdoc service
 * @name sharedService
 * @description Getting User data and posting data.
 *
*/
.service('sharedService', function() {

    /**
     * @ngdoc metod
     * @name setCurrentUser
     * @description posting User data.
     *
    */
	this.setCurrentUser = function(data) {
        return this.currentUser = data;
    };

    /**
     * @ngdoc metod
     * @name getCurrentUser
     * @description getting User data.
     *
    */
    this.getCurrentUser = function() {
        return this.currentUser;
    };
})


/**
 * @ngdoc service
 * @name loginService
 * @description login cred data.
 *
*/
.factory('loginService', function($http) {
    return {
        /**
         * @ngdoc metod
         * @name getData
         * @description getting perticular User data for login.
         *
        */
        getData: function() {
            return $http.get('./data/loginData.json').then(function(response) {
                return response;
            }).catch(function(response) {
                return
            })
        }
    };
})

/**
 * @ngdoc service
 * @name treeListService
 * @description Tree data.
 *
*/
.factory('treeListService', function($http) {
    return {
        /**
         * @ngdoc metod
         * @name getData
         * @description getting Tree data object.
         *
        */
        getData: function() {
            return $http.get('./data/treeProfileData.json').then(function(response) {
                return response;
            }).catch(function(response) {
                return
            })
        }
    };
})
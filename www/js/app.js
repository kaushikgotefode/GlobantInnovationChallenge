// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/container.html'
    //controller: 'AppCtrl'
  })

  .state('app.profile', {
    url: '/profile',
    controller: 'ProfileCtrl',
    templateUrl: 'templates/profile.html'
  })

  .state('app.adopt', {
    url: '/adopt',
    controller: 'AdoptCtrl',
    templateUrl: 'templates/adopttree.html'
  })

  .state('app.dash', {
    url: '/dashboard',
    controller: 'DashCtrl',
    templateUrl: 'templates/dashboard.html'
  })

  .state('app.tree', {
    url: '/tree',
    controller: 'TreeCtrl',
    templateUrl: 'templates/tree.html'
  })

  .state('app.treeedit', {
    url: '/treeedit',
    controller: 'TreeeditCtrl',
    templateUrl: 'templates/treeedit.html'
  })

  .state('app.congrats', {
    url: '/congrats',
    templateUrl: 'templates/congrats.html'
  })

  .state('app.location', {
    url: '/location',
    controller: 'LocationCtrl',
    templateUrl: 'templates/location.html'
  })

  .state('app.emotree', {
    url: '/emotree',
    controller: 'EmotreeCtrl',
    templateUrl: 'templates/emotree.html'
  })
  
  .state('app.treeprofile', {
      url: '/treeprofile',
      controller: 'TreeProfileCtrl',
      templateUrl: 'templates/treeprofile.html'
  })

  .state('app.search', {
    url: '/search',
    templateUrl: 'templates/search.html'
    // views: {
    //   'menuContent': {
    //     templateUrl: 'templates/search.html'
    //   }
    // }
  })

  .state('app.browse', {
      url: '/browse',
      templateUrl: 'templates/browse.html'
      // views: {
      //   'menuContent': {
      //     templateUrl: 'templates/browse.html'
      //   }
      // }
  })
  .state('app.playlists', {
      url: '/playlists',
      templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
      // views: {
      //   'menuContent': {
      //     templateUrl: 'templates/playlists.html',
      //     controller: 'PlaylistsCtrl'
      //   }
      // }
  })

      .state('app.screen5', {
      url: '/screen5',
      templateUrl: 'templates/screen5.html',
      // views: {
          // 'menuContent': {
              // templateUrl: 'templates/screen5.html',
              //              controller: 'PlaylistsCtrl'
          // }
      // }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    templateUrl: 'templates/playlist.html',
    controller: 'PlaylistCtrl'
    // views: {
    //   'menuContent': {
    //     templateUrl: 'templates/playlist.html',
    //     controller: 'PlaylistCtrl'
    //   }
    // }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

/* global app, angular */
(function() {
  const app = angular.module('app', ['ui.router']);
  app.config(['currServProvider', '$stateProvider', function(currServProvider, $stateProvider) {
    $stateProvider
      .state({
        name: 'root',
        url: '/'
      })
      .state({
        name: 'home',
        url: '/home',
        component: 'homePage'
      })
      .state({
        name: 'converter',
        url: '/converter',
        component: 'currencyConverter'
        // template: '<p>GG</p>'
      })
      .state({
        name: 'currencies',
        url: '/currencies',
        component: '<p>aaaaaa</p>'
      });

    currServProvider.setAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11');
  }]);

  app.run(function($window, $rootScope) {
    $rootScope.netActive = navigator.onLine;
    $window.addEventListener('offline', function() {
      $rootScope.$apply(function() {
        $rootScope.netActive = false;
      });
    });
    $window.addEventListener('online', function() {
      $rootScope.$apply(function() {
        $rootScope.netActive = true;
      });
    });
  });
  window.app = app;
}());
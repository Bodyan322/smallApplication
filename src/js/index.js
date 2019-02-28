/* global app, angular */
(function() {
  const app = angular.module('app', ['ui.router']);
  app.config(['currServProvider', '$stateProvider', function(currServProvider, $stateProvider) {
    $stateProvider
      .state({
        name: 'root',
        url: '/',
        template: `<div class="sign">
        <span class="sign__word">Welcome</span>
        <span class="sign__word">you</span>
        <span class="sign__word">here</span>
      </div>`
      })
      .state({
        name: 'converter',
        url: '',
        component: 'currencyConverter'
      });

    currServProvider.setAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11');
  }]);

  app.run(function($window, $rootScope) {
    $rootScope.netActive = navigator.onLine;
    $window.addEventListener('offline', function() {
      $rootScope.$apply(function() {
        $rootScope.inetChecker = false;
      });
    });
    $window.addEventListener('online', function() {
      $rootScope.$apply(function() {
        $rootScope.inetChecker = true;
      });
    });
  });
  window.app = app;
}());
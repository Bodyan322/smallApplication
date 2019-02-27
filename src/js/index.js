/* global app, angular */
(function() {
  const app = angular.module('app', []);
  app.config(['currServProvider', function(currServProvider) {
    currServProvider.setAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11');
  }]);
  window.app = app;
}());
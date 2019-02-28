/* global app */
(function() {
  app.directive('inetChecker', function() {
    return {
      restrict: 'AE',
      replace: true,
      template: `<div class="cheker-connection" ng-hide='inetChecker'>
      <div class="neon">OFFLINE </div>`
    };
  });
}());
/* global app angular*/
(function() {
  app.filter('filterCurr', [function() {
    return function(array, expression) {
      return array.filter(function(item) {
        return !expression || !angular.equals(item, expression);
      });
    };
  }]);
}());
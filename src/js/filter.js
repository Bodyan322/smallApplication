/* global app angular*/
(function() {
  app.filter('filterCurr', [function() {
    return function(array, expression) {
      return array.filter(item => item.ccy !== expression);
    };
  }]);
}());
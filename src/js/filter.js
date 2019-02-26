/* global app */
(function() {
  app.filter('filterCurr', function() {
    return function(array, filterValue) {
      return array.filter(item => item.ccy !== filterValue);
    };
  });
}());
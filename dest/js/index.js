/* global app, angular */
(function() {
  const app = angular.module('app', []);
  window.app = app;
}());
/* global app, angular*/
(function() {
  app.service('currServ', ['$http', function($http) {
    this.list = [];
    this.loadCache = () => {
      $http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then(({ data }) => {
          data.push({ ccy: 'UAH', buy: '1', sale: '1' });
          return angular.copy(data, this.list);
        });
      return this.list;
    };
  }]);
}());
/* global app */
(function() {
  app.controller('controllServ', ['currServ', function(currServ) {
    this.countValue = null;
    this.costValue = null;
    this.activeTab = true;
    this.currency = currServ.loadCache();
    this.currencyGiven = { ccy: 'USD', buy: '26.85000', sale: '27.15000' };
    this.currencyReceiven = { ccy: 'EUR', buy: '30.30000', sale: '30.80000' };
  }]);
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2luZGV4LmpzIiwianMvc2VydmljZS5qcyIsImpzL2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGFwcCwgYW5ndWxhciAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKTtcclxuICB3aW5kb3cuYXBwID0gYXBwO1xyXG59KCkpOyIsIi8qIGdsb2JhbCBhcHAsIGFuZ3VsYXIqL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgYXBwLnNlcnZpY2UoJ2N1cnJTZXJ2JywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XHJcbiAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgIHRoaXMubG9hZENhY2hlID0gKCkgPT4ge1xyXG4gICAgICAkaHR0cC5nZXQoJ2h0dHBzOi8vYXBpLnByaXZhdGJhbmsudWEvcDI0YXBpL3B1YmluZm8/anNvbiZleGNoYW5nZSZjb3Vyc2lkPTUnKVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5wdXNoKHsgY2N5OiAnVUFIJywgYnV5OiAnMScsIHNhbGU6ICcxJyB9KTtcclxuICAgICAgICAgIHJldHVybiBhbmd1bGFyLmNvcHkoZGF0YSwgdGhpcy5saXN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRoaXMubGlzdDtcclxuICAgIH07XHJcbiAgfV0pO1xyXG59KCkpOyIsIi8qIGdsb2JhbCBhcHAgKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGFwcC5jb250cm9sbGVyKCdjb250cm9sbFNlcnYnLCBbJ2N1cnJTZXJ2JywgZnVuY3Rpb24oY3VyclNlcnYpIHtcclxuICAgIHRoaXMuY291bnRWYWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmNvc3RWYWx1ZSA9IG51bGw7XHJcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VyclNlcnYubG9hZENhY2hlKCk7XHJcbiAgICB0aGlzLmN1cnJlbmN5R2l2ZW4gPSB7IGNjeTogJ1VTRCcsIGJ1eTogJzI2Ljg1MDAwJywgc2FsZTogJzI3LjE1MDAwJyB9O1xyXG4gICAgdGhpcy5jdXJyZW5jeVJlY2VpdmVuID0geyBjY3k6ICdFVVInLCBidXk6ICczMC4zMDAwMCcsIHNhbGU6ICczMC44MDAwMCcgfTtcclxuICB9XSk7XHJcbn0oKSk7Il19

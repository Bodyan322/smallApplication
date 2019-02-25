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
    this.convertTo = (startVal, endVal) => {
      let result = 0;
      result = startVal * endVal;
      return result;
    };

    this.convertFrom = (startVal, endValo) => {
      let result = 0;
      result = startVal / endValo;
      return result;
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

    this.changeValues = () => {
      [this.countValue, this.costValue] = [this.costValue, this.countVal];
      [this.currencyGiven, this.currencyReceiven] = [this.currencyReceiven, this.currencyGiven];
    };

    this.convertValue = () => {
      let res = 0;
      res = currServ.convertTo(this.countValue, this.currencyGiven.buy);
      this.costValue = currServ.convertFrom(res, this.currencyReceiven.sale);
    };
  }]);

  app.filter('filterCurr', function() {
    return function(array, filterValue) {
      return array.filter(item => item.ccy !== filterValue);
    };
  });
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2luZGV4LmpzIiwianMvc2VydmljZS5qcyIsImpzL2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGFwcCwgYW5ndWxhciAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKTtcclxuICB3aW5kb3cuYXBwID0gYXBwO1xyXG59KCkpOyIsIi8qIGdsb2JhbCBhcHAsIGFuZ3VsYXIqL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgYXBwLnNlcnZpY2UoJ2N1cnJTZXJ2JywgWyckaHR0cCcsIGZ1bmN0aW9uKCRodHRwKSB7XHJcbiAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgIHRoaXMubG9hZENhY2hlID0gKCkgPT4ge1xyXG4gICAgICAkaHR0cC5nZXQoJ2h0dHBzOi8vYXBpLnByaXZhdGJhbmsudWEvcDI0YXBpL3B1YmluZm8/anNvbiZleGNoYW5nZSZjb3Vyc2lkPTUnKVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgZGF0YS5wdXNoKHsgY2N5OiAnVUFIJywgYnV5OiAnMScsIHNhbGU6ICcxJyB9KTtcclxuICAgICAgICAgIHJldHVybiBhbmd1bGFyLmNvcHkoZGF0YSwgdGhpcy5saXN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRoaXMubGlzdDtcclxuICAgIH07XHJcbiAgICB0aGlzLmNvbnZlcnRUbyA9IChzdGFydFZhbCwgZW5kVmFsKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICByZXN1bHQgPSBzdGFydFZhbCAqIGVuZFZhbDtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb252ZXJ0RnJvbSA9IChzdGFydFZhbCwgZW5kVmFsbykgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgcmVzdWx0ID0gc3RhcnRWYWwgLyBlbmRWYWxvO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICB9XSk7XHJcbn0oKSk7IiwiLyogZ2xvYmFsIGFwcCAqL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgYXBwLmNvbnRyb2xsZXIoJ2NvbnRyb2xsU2VydicsIFsnY3VyclNlcnYnLCBmdW5jdGlvbihjdXJyU2Vydikge1xyXG4gICAgdGhpcy5jb3VudFZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuY29zdFZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMuYWN0aXZlVGFiID0gdHJ1ZTtcclxuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyU2Vydi5sb2FkQ2FjaGUoKTtcclxuICAgIHRoaXMuY3VycmVuY3lHaXZlbiA9IHsgY2N5OiAnVVNEJywgYnV5OiAnMjYuODUwMDAnLCBzYWxlOiAnMjcuMTUwMDAnIH07XHJcbiAgICB0aGlzLmN1cnJlbmN5UmVjZWl2ZW4gPSB7IGNjeTogJ0VVUicsIGJ1eTogJzMwLjMwMDAwJywgc2FsZTogJzMwLjgwMDAwJyB9O1xyXG5cclxuICAgIHRoaXMuY2hhbmdlVmFsdWVzID0gKCkgPT4ge1xyXG4gICAgICBbdGhpcy5jb3VudFZhbHVlLCB0aGlzLmNvc3RWYWx1ZV0gPSBbdGhpcy5jb3N0VmFsdWUsIHRoaXMuY291bnRWYWxdO1xyXG4gICAgICBbdGhpcy5jdXJyZW5jeUdpdmVuLCB0aGlzLmN1cnJlbmN5UmVjZWl2ZW5dID0gW3RoaXMuY3VycmVuY3lSZWNlaXZlbiwgdGhpcy5jdXJyZW5jeUdpdmVuXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jb252ZXJ0VmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgIGxldCByZXMgPSAwO1xyXG4gICAgICByZXMgPSBjdXJyU2Vydi5jb252ZXJ0VG8odGhpcy5jb3VudFZhbHVlLCB0aGlzLmN1cnJlbmN5R2l2ZW4uYnV5KTtcclxuICAgICAgdGhpcy5jb3N0VmFsdWUgPSBjdXJyU2Vydi5jb252ZXJ0RnJvbShyZXMsIHRoaXMuY3VycmVuY3lSZWNlaXZlbi5zYWxlKTtcclxuICAgIH07XHJcbiAgfV0pO1xyXG5cclxuICBhcHAuZmlsdGVyKCdmaWx0ZXJDdXJyJywgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIGZpbHRlclZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNjeSAhPT0gZmlsdGVyVmFsdWUpO1xyXG4gICAgfTtcclxuICB9KTtcclxufSgpKTsiXX0=

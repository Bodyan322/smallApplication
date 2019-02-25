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
  }]);
}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2luZGV4LmpzIiwianMvc2VydmljZS5qcyIsImpzL2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgYXBwLCBhbmd1bGFyICovXHJcbihmdW5jdGlvbigpIHtcclxuICBjb25zdCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pO1xyXG4gIHdpbmRvdy5hcHAgPSBhcHA7XHJcbn0oKSk7IiwiLyogZ2xvYmFsIGFwcCwgYW5ndWxhciovXHJcbihmdW5jdGlvbigpIHtcclxuICBhcHAuc2VydmljZSgnY3VyclNlcnYnLCBbJyRodHRwJywgZnVuY3Rpb24oJGh0dHApIHtcclxuICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgdGhpcy5sb2FkQ2FjaGUgPSAoKSA9PiB7XHJcbiAgICAgICRodHRwLmdldCgnaHR0cHM6Ly9hcGkucHJpdmF0YmFuay51YS9wMjRhcGkvcHViaW5mbz9qc29uJmV4Y2hhbmdlJmNvdXJzaWQ9NScpXHJcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICBkYXRhLnB1c2goeyBjY3k6ICdVQUgnLCBidXk6ICcxJywgc2FsZTogJzEnIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuY29weShkYXRhLCB0aGlzLmxpc3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gdGhpcy5saXN0O1xyXG4gICAgfTtcclxuICAgIHRoaXMuY29udmVydFRvID0gKHN0YXJ0VmFsLCBlbmRWYWwpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgIHJlc3VsdCA9IHN0YXJ0VmFsICogZW5kVmFsO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNvbnZlcnRGcm9tID0gKHN0YXJ0VmFsLCBlbmRWYWxvKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICByZXN1bHQgPSBzdGFydFZhbCAvIGVuZFZhbG87XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gIH1dKTtcclxufSgpKTsiLCIvKiBnbG9iYWwgYXBwICovXHJcbihmdW5jdGlvbigpIHtcclxuICBhcHAuY29udHJvbGxlcignY29udHJvbGxTZXJ2JywgWydjdXJyU2VydicsIGZ1bmN0aW9uKGN1cnJTZXJ2KSB7XHJcbiAgICB0aGlzLmNvdW50VmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5jb3N0VmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5hY3RpdmVUYWIgPSB0cnVlO1xyXG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJTZXJ2LmxvYWRDYWNoZSgpO1xyXG4gICAgdGhpcy5jdXJyZW5jeUdpdmVuID0geyBjY3k6ICdVU0QnLCBidXk6ICcyNi44NTAwMCcsIHNhbGU6ICcyNy4xNTAwMCcgfTtcclxuICAgIHRoaXMuY3VycmVuY3lSZWNlaXZlbiA9IHsgY2N5OiAnRVVSJywgYnV5OiAnMzAuMzAwMDAnLCBzYWxlOiAnMzAuODAwMDAnIH07XHJcbiAgfV0pO1xyXG59KCkpOyJdfQ==

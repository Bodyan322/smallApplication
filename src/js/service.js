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
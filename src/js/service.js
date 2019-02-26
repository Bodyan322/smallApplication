/* global app, angular*/
(function() {
  app.service('currServ', ['$http', function($http) {
    this.list = [];
    this.loadCache = () => {
      $http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=11')
        .then(({ data }) => {
          data.forEach(item => this.list.push(item));
          this.list.push({ ccy: 'UAH', buy: '1', sale: '1' });
        });
      return this.list;
    };
    this.convertTo = (startVal, endVal) => {
      let result = 0;
      result = startVal * endVal;
      return result;
    };

    this.convertFrom = (startVal, endVal) => {
      let result = 0;
      result = startVal / endVal;
      return result;
    };
  }]);

  app.constant('constantValues', {
    'currency': [{ ccy: 'USD', buy: '26.80000', sale: '27.10000' },
      { ccy: 'EUR', buy: '30.30000', sale: '30.80000' }]
  });
}());
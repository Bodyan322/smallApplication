/* global app, angular*/
(function() {
  app.provider('currServ', function() {
    let API = '';

    return {
      setAPI: apiURL => (API = apiURL),
      list: [],
      $get: ['$http', function($http) {
        return {
          loadCache: () => {
            $http.get(API)
              .then(({ data }) => {
                data.forEach(item => this.list.push(item));
                this.list.push({ ccy: 'UAH', buy: '1', sale: '1' });
              });
            return this.list;
          },
          convertTo(startVal, endVal) {
            let result = 0;
            result = startVal * endVal;
            return result;
          },

          convertFrom(startVal, endVal) {
            let result = 0;
            result = startVal / endVal;
            return result;
          }
        };
      }]
    };
  });

  app.constant('constantValues', {
    'currency': [{ ccy: 'USD', buy: '26.80000', sale: '27.10000', $$hashKey: 'object:7' },
      { ccy: 'EUR', buy: '30.30000', sale: '30.80000', $$hashKey: 'object:11' }]
  });
}());
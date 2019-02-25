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
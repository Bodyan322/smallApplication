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
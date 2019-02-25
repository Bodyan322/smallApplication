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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL2luZGV4LmpzIiwianMvc2VydmljZS5qcyIsImpzL2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBhcHAsIGFuZ3VsYXIgKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXSk7XHJcbiAgd2luZG93LmFwcCA9IGFwcDtcclxufSgpKTsiLCIvKiBnbG9iYWwgYXBwLCBhbmd1bGFyKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gIGFwcC5zZXJ2aWNlKCdjdXJyU2VydicsIFsnJGh0dHAnLCBmdW5jdGlvbigkaHR0cCkge1xyXG4gICAgdGhpcy5saXN0ID0gW107XHJcbiAgICB0aGlzLmxvYWRDYWNoZSA9ICgpID0+IHtcclxuICAgICAgJGh0dHAuZ2V0KCdodHRwczovL2FwaS5wcml2YXRiYW5rLnVhL3AyNGFwaS9wdWJpbmZvP2pzb24mZXhjaGFuZ2UmY291cnNpZD01JylcclxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgIGRhdGEucHVzaCh7IGNjeTogJ1VBSCcsIGJ1eTogJzEnLCBzYWxlOiAnMScgfSk7XHJcbiAgICAgICAgICByZXR1cm4gYW5ndWxhci5jb3B5KGRhdGEsIHRoaXMubGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmxpc3Q7XHJcbiAgICB9O1xyXG4gIH1dKTtcclxufSgpKTsiLCIiXX0=

var theModule = angular.module('fundBill', []);

theModule
.controller('CartController', function ($scope, CartFactory) {
  // access to $scope.user.name because of text input w/ ng-model

  CartFactory.getCart()
  .then(function(cart) {
    $scope.cart = cart;
  });
  $scope.total = CartFactory.getTotal;
});

theModule
.controller('ProductsController', function ($scope, CartFactory) {
  $scope.products = [{
    price: 100,
    title: 'Larger Murray',
    url: 'http://fillmurray.com/300/300'
  }, {
    price: 56,
    title: 'Smaller Murray',
    url: 'http://fillmurray.com/200/150'
  }];

  $scope.addSomething = CartFactory.addToCart;

  $scope.submit = function() {
    console.log("form submitted!");
  };

  $scope.showCardScope = false;
  $scope.showPaymentScope = false;

  $scope.showCard = function(){
    $scope.showCardScope = !$scope.showCardScope;
  }

  $scope.showPayment = function(){
    $scope.showPaymentScope = !$scope.showPaymentScope;
  }
});

theModule
.factory('CartFactory', function($http) {
  var cart = [];
  var totalPrice = 0;

  return {
    getCart: function() {
      return $http.get('/api/cart')
      .then(function(response) {
        cart = response.data;
        cart.forEach(function(item) {
          totalPrice += item.price;
        });
        return response.data;
      });
    },
    addToCart: function(item) {
      return $http.post('/api/cart', item)
      .then(function() {
        totalPrice += item.price;
        cart.push(item);
      });
    },
    getTotal: function() {
      return totalPrice;
    }
  };
});
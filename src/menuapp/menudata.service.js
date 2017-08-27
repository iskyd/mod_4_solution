(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function() {
    return $http({
      method: 'GET',
      url: ApiBasePath + '/categories.json'
    }).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(response) {
      console.log('Error!');
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: 'GET',
      url: ApiBasePath + '/menu_items.json?category=' + categoryShortName
    }).then(function successCallback(response) {
      return response.data.menu_items;
    }, function errorCallback(response) {
      console.log('Error!');
    });
  };
}

})();

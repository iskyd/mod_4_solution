(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

// Version with resolving to 1 item based on $stateParams in route config
CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var vm = this;
  vm.categories = categories;
}

})();

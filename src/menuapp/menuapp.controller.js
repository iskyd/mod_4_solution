(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['MenuDataService', 'categories'];
function MenuAppController(MenuDataService, categories) {
  var vm = this;
  vm.categories = categories;
}

})();

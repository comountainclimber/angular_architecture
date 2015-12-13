(function(){
	angular.module('customersApp')
	.controller('ordersController', ['$scope', '$routeParams', 'customersFactory', function($scope, $routeParams, customersFactory){
		
	var customerId = $routeParams.customerId
	$scope.customer = null;

	function init() {
		//search for customers for the customerId
		$scope.customer = customersFactory.getCustomer(customerId)
	}

	init()

	}])
}())

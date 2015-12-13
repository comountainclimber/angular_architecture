(function(){
	angular.module('customersApp')
	.controller('ordersController', ['$scope', '$routeParams', 'customersFactory', function($scope, $routeParams, customersFactory){
		
	var customerId = $routeParams.customerId
	$scope.customer = null;

	function init() {
		//search for customers for the customerId
		customersFactory.getCustomer(customerId)
			.success(function(customer){
				$scope.customer=customer
			})
			
			.error(function(data,status,headers,config){
				//handle error
			})
	}

	init()

	}])
}())

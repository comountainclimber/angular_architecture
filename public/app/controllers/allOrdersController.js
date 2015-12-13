(function(){
	angular.module('customersApp')
	.controller('allOrdersController', ['$scope', '$routeParams', 'customersFactory', function($scope, $routeParams, customersFactory){
		
	$scope.ordersTotal = 0.0
	$scope.orders = null
	$scope.totalType

	function init() {
		//search for customers for the customerId
		customersFactory.getOrders()
			.success(function(orders){
				$scope.orders=orders
				getOrdersTotal()
			})
			
			.error(function(data,status,headers,config){
				//handle error
			})
	}

	function getOrdersTotal(){
		var total = 0
		for (var i = 0; i < $scope.orders.length; i++) {
			total += $scope.orders[i].total
		}
		$scope.ordersTotal = total
		$scope.totalType = ($scope.ordersTotal > 100) ? 'success' : 'danger';
	}

	init()

	}])
}())

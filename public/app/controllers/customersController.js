(function(){
	angular.module('customersApp')
	.controller('customerController', ['$scope', 'customersFactory', 'appSettings', '$log', function($scope, customersFactory, appSettings, $log){

		$scope.sortBy = 'name'
		$scope.reverse = false
		$scope.customers = []
		$scope.appSettings = appSettings

		function init(){
			customersFactory.getCustomers()
				.success(function(customers){
					$scope.customers=customers
				})
				.error(function(data,status,headers,config){
					$log.log(data.error + ' ' + status)
				})
		}

		init();

		$scope.doSort = function(propName){
			$scope.sortBy=propName
			$scope.reverse=!$scope.reverse
		}
	}])
}())

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

		$scope.deleteCustomer = function(customerId){
			customersFactory.deleteCustomer(customerId)
				.success(function(status){
					if (status) {
						for (var i=0; i<$scope.customers.length;i++){
							if ($scope.customers[i].id===customerId){
								$scope.customers.splice(i,1)
								break
							}
						}
					}
					else {
						$window.alert('Sorry, unable to delete customer')
					}
				})
		}



	}])
}())

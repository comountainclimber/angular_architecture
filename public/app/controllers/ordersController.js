(function(){
	angular.module('customersApp')
	.controller('ordersController', ['$scope', '$routeParams', function($scope, $routeParams){
		
		var customerId = $routeParams.customerId
		$scope.orders = null

		function init() {
			//search for customers for the customerId
			for (var i=0; len=$scope.customers.length;i++){
				if($scope.customers[i].id===parseInt(customerId)){
					$scope.orders = $scope.customers[i].orders
					break
				}
			}
		}

		$scope.customers = [{id: 1,
							joined: '2008-03-10', 
							name: 'Steve Freeman', 
							city: 'Cranford', 
							orderTotal: 666.6666,
							orders: [
								{
									id:1,
									product: 'Cannabis',
									total: 666.6666 
								}
							]
							},

							{id:2,
							joined: '2000-12-02', 
							name: 'Mick Jagger', 
							city: 'NYC', 
							orderTotal: 56.32,
							orders: [
								{
									id:2,
									product: 'Bong',
									total: 50.00 
								},
								{
									id:3,
									product: 'Edibles',
									total: 6.32 
								}

							]	
							},

							{id:3,
							joined: '2000-12-02',
							name: 'Pat Doucher', 
							city: 'Westfield', 
							orderTotal: 420}]

			init()

		
	}])
}())

(function(){
	angular.module('customersApp')
	.controller('customerController', ['$scope', function($scope){

		$scope.sortBy = 'name'
		$scope.reverse = false

		$scope.customers = [{id: 1,
							joined: '2008-03-10', 
							name: 'Steve Freeman', 
							city: 'Cranford', 
							orderTotal: 666.6666,
							orders: [
								{
									id:1,
									product: 'India Pale Ale',
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
									product: 'TV',
									total: 50.00 
								},
								{
									id:3,
									product: 'Diamonds',
									total: 6.32 
								}

							]	
							},

							{id:3,
							joined: '2000-12-02',
							name: 'Pat Doucher', 
							city: 'Westfield', 
							orderTotal: 420}]

		$scope.doSort = function(propName){
			$scope.sortBy=propName
			$scope.reverse=!$scope.reverse
		}
	}])
}())

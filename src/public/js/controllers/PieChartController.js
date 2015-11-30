angular.module('App').controller("PieChartController", ['$scope', '$http', function ($scope, $http) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  $scope.onClick = function(item, event) {
	  
  };
}]);
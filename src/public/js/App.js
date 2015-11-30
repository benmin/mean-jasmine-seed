var app = angular.module('App', ['chart.js']);

app.controller("PieChartController", ['$scope', '$http', function ($scope, $http) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  $scope.onClick = function(item, event) {
	  
  };
}]);

app.controller('MapController', ['$scope', '$http', function ($scope, $http) {
	
	$http({
	    method: 'GET',
	    url: '/servers/locations'
	}).then(function successCallback(response) {
		
		var servers = response.data,
			mapImages = [],
			i, server;
		for(i = 0; i < servers.length; i++) {
			server = servers[i];
			mapImages.push({
				latitude: server.latitude,
				longitude: server.longitude,
				type: 'circle',
				color: '#6c00ff',
				scale: 0.8,
				label: server.name,
				labelShiftY: 2,
				title: server.name,
				description: 'lat: ' + server.latitude + ' / long: ' + server.longitude
			});
		}

		// add all your code to this method, as this will ensure that page is loaded
//	    AmCharts.ready(function() {
//	    	console.log('inside AmCharts');
	        // create AmMap object
	        var map = new AmCharts.AmMap();
	        // set path to images
	        map.pathToImages = "bower_components/ammap/dist/ammap/images/";

	        /* create data provider object
	         map property is usually the same as the name of the map file.

	         getAreasFromMap indicates that amMap should read all the areas available
	         in the map data and treat them as they are included in your data provider.
	         in case you don't set it to true, all the areas except listed in data
	         provider will be treated as unlisted.
	        */
	        var dataProvider = {
	            map: "worldLow",
	            getAreasFromMap:true,
	            images: mapImages
	        };
	        // pass data provider to the map object
	        map.dataProvider = dataProvider;

	        /* create areas settings
	         * autoZoom set to true means that the map will zoom-in when clicked on the area
	         * selectedColor indicates color of the clicked area.
	         */
	        map.areasSettings = {
	            autoZoom: true,
	            color: '#00CC00',
	            selectedColor: '#ff9933',
	            rollOverColor: '#ff9933',
	            rollOverOutlineColor: '#000'
	        };
	        
	        map.addListener('click', function(event) {
	        	var devInfo = map.getDevInfo();
	        });
	        
	        // let's say we want a small map to be displayed, so let's create it
	        map.smallMap = new AmCharts.SmallMap();

	        // write the map to container div
	        map.write("mapdiv");
//	    });
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	
	
}]);
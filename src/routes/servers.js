var express = require('express');
var dataManager = require('../DataManager');
var router = express.Router();

/* GET all servers. */
router.get('/locations', function(request, response, next) {
	var servers = [];
	var data = dataManager.getData();
	var i, server;
	for(i = 0; i < data.length; i++) {
		server = {
			id: data[i].id,
			name: data[i].name,
			latitude: data[i].latitude,
			longitude: data[i].longitude
		};
		servers.push(server);
	}
	response.send(servers);
});

module.exports = router;
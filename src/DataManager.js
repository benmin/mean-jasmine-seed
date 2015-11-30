var fs = require('fs');
var path = require('path');

var dataFilesLocation = path.join(__dirname, '../data/');
var data = [];

var loadData = function(fileName) {
	fs.readFile(path.join(dataFilesLocation, fileName), 'utf8', function (err, loadedData) {
		if (err) throw err;
		data = JSON.parse(loadedData);
	});
};

var getData = function() {
	return data;
};

module.exports = {
	loadData: loadData,
	getData: getData
};
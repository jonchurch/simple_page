var express = require('express');
var server = express();

server.get('/', function(request, response){
	response.sendFile('html/index.html', {root: __dirname + '/public/'});
});

server.get('/about', function(request, response){
	response.sendFile('html/about.html', {root: __dirname + '/public/'});
});




server.listen(8080);

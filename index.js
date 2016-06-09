var express = require('express');
var server = express();

server.get('/', function(request, response){
	response.send('peanut butter');
});


server.listen(8080);

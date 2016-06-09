var express = require('express');
var server = express();

server.get('/', function(request, response){
	response.sendFile('html/index.html', {root: __dirname + '/public/'});
});


server.listen(8080);

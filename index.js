var express = require('express');
var server = express();

//Add index page to /
server.get('/', function(request, response){
	response.sendFile('html/index.html', {root: __dirname + '/public/'});
});

//Add about page to /about/
server.get('/about', function(request, response){
	response.sendFile('html/about.html', {root: __dirname + '/public/'});
});

//Add contact page to /contact/
server.get('/contact', function(request, response){
	response.sendFile('html/contact.html', {root: __dirname + '/public/'});
});

server.post('/contact', function(request, response){
	response.send("hello");
});


server.listen(8080);

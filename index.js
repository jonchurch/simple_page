var express = require('express');
var server = express();
var bodyParser = require('body-parser')

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

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
//Add post method to contact page
server.post('/contact', function(request, response){
	response.json(request.body);
});


server.listen(8080);

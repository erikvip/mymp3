var express = require('express');
var app = express(); 


app.use(express.static(__dirname + '/public'));
app.engine('jade', require('jade').__express);


app.get('/', function(req, res) {
	res.render('index.jade');
});

var server = app.listen(1337, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at %s:5S', host, port);
});





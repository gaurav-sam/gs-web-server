var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', function (req, res) {
	res.send('about us')
});

app.use(express.static(__dirname + '/public'))


app.listen(port, function () {
	console.log('express server started on ' + port)
});
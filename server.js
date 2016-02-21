var express = require('express');
var app = express();
var port = 3000;

var middleWare = {
	requireAuthentication : function (req, res, next) {
		console.log('requireAuthentication');
		next();
	},

	logger : function (req, res, next) {
		new Date().toString();
		console.log('REQUEST : ' + req.method + ' ' + req.originalUrl +' ' + Date().toString());
		next();
	}
}

app.use(middleWare.logger);

app.get('/about', function (req, res) {
	res.send('about us')
});

app.use(express.static(__dirname + '/public'))


app.listen(port, function () {
	console.log('express server started on ' + port)
});
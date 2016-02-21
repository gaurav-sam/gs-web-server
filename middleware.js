var middleware = {
	requireAuthentication : function (req, res, next) {
		console.log('requireAuthentication');
		next();
	},

	logger : function (req, res, next) {
		new Date().toString();
		console.log('REQUEST : ' + req.method + ' ' + req.originalUrl +' ' + new Date().toString());
		next();
	}
}

module.exports = middleware;
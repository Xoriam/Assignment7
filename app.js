// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var express = require("express"),
	http = require("http"),
	path = require("path"),

	routes = require("./routes/index"),

	app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + "/public"));

http.createServer(app).listen(3000, function(){
	console.log("Express server is listening on port 3000.");
});

app.use('/', routes);

module.exports = app;


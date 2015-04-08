// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	"use strict";
	res.render('index', { title: 'Small Fry - URL Shortener' });
});

router.post('/submit', function(req, res, next) {
	"use strict";
	console.log(req.body);
});

module.exports = router;
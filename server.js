var http = require('http');
var url = require("url");
var request = require('request');
var bing = require('./lib/bingxml.js');
var rddt = require('./lib/redditfetcher.js');

http.createServer(function (req, res) {
	var uri = url.parse(req.url).pathname;
	console.log(uri);
	if (uri == "/HPImageArchive.aspx") {
		res.writeHead(200, {'Content-Type': 'text/xml'});
		bing.bingxml(function (err, data) {
			res.end(data);
		});
	} else if (uri == "/az/hprichbg/rb/wallpaper_480x800.jpg") {
		rddt.redditmg(function (err,data) {
			request.get(data).pipe(res)
		})
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('Not found.\n');
	};
}).listen(8008);
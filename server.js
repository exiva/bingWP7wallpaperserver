var http = require('http');
var url = require("url");
var bing = require('./lib/bingxml.js');

http.createServer(function (req, res) {
	var uri = url.parse(req.url).pathname;
	console.log(uri);
	if (uri == "/HPImageArchive.aspx") {
		res.writeHead(200, {'Content-Type': 'text/xml'});
		// res.end('Hello World\n');
		bing.bingxml(function (err, data) {
			res.end(data);
		});
	} else if (uri == "/az/hprichbg/rb/wallpaper_480x800.jpg") {
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		res.end('Hello World\n');
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('Not found.\n');
	};
}).listen(3000);
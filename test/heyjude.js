var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {
		'content-type':'text/plain'
	});
	res.end("Hey, Jude!");
}).listen(90,'127.0.0.4');
console.log('Server running on 127.0.0.4:90');

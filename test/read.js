var http = require('http');
var fs =require('fs');
http.createServer(function(req, res) {
	fs.readFile('heyjude.js', 'utf8', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		if (err)
<<<<<<< HEAD
			res.write('Oops!!Could not find or open file for reading!');
=======
			res.write('Could not find or open file for reading!');
>>>>>>> origin/master
		else
			res.write(data);
		res.end();
	});
}).listen(90, '127.0.0.7', function(){console.log('bound to 127.0.0.7:90');});
console.log('Server running on 127.0.0.7:90');
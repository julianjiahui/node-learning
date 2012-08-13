var http = require('http');
var options = {
	host: '127.0.0.7',
	port: 90,
	path: '/?file=heyjude',
	method: 'GET'
};
var processPublicTimeline = function(response) {
	console.log('finished request');
};
for (var i = 0; i < 2000; i++) {
	http.request(options, processPublicTimeline).end();
}
//
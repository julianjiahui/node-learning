var net = require('net');
var chatServer = net.createServer(),
	clientList = [];
chatServer.on('connection', function(client) {


	client.name = client.remoteAddress + ':' + client.remotePort
	client.write('Hi ' + client.name + '!\r\n');
	clientList.push(client);
	console.log(client.name + ' joined');

	var tc=[];

	client.on('data', function(data){
		var d=data.toString();

		if (d == '\b') {tc.pop();return;}
		if (d != '\r\n') {tc.push(d);return;}

		tc.push('\r\n');
		var cleanup = [];
		for(var i=0;i<clientList.length;i+=1) {
			//write this data to all clients
			if (clientList[i] != client) {
				if (clientList[i].writable) {	
					clientList[i].write(client.name+' says: '+tc.join(''))
				} else {
					cleanup.push(clientList[i]);
					clientList[i].destroy()
				}
			}
		}
		//Remove dead Nodes out of write loop to avoid trashing loop index
		for(i=0;i<cleanup.length;i+=1) {
			clientList.splice(clientList.indexOf(cleanup[i]), 1)
		}
		tc = [];

	})

	client.on('end', function() {
		clientList.splice(clientList.indexOf(client), 1);
		console.log(client.name + ' quit');
	})

	client.on('error', function(e) {
		console.log(e);
	})
});
chatServer.listen(90);
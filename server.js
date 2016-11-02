var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('.'));

// connection
io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('sendClick', function(key){
		console.log('sendClick: ' + key);
		socket.broadcast.emit('triggerClick', key);
	});
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



var robot = require("robotjs");
var socket = require('socket.io-client')('http://localhost:3000');

socket.on('connect', function(){});

socket.on('triggerClick', function(data){
	// Press enter.
	console.log('recieved event', data);
	robot.keyTap(data);
});

socket.on('disconnect', function(){});
console.log('loaded..');

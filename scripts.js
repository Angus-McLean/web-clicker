
var socket = io();

function sendClick(key) {
	console.log('sending', key);
	socket.emit('sendClick', key);
}

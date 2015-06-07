var express = require('express');
var app = express();

// bind socket.io to the server
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res) {
  res.render('index.ejs');
});

server.listen(3000);


io.sockets.on('connection', function(socket) {

  socket.on('send_taco', function(data) {
    console.log(data);
    io.sockets.emit('receive_taco', data);

  });

});
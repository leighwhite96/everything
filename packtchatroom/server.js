const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');


app.get('/', function(req,res) {
  res.sendFile(__dirname + '/index.html' );
});

const server = http.Server(app);
server.listen(5000);

const io = socketIO(server);

io.on('connection', function(socket) {
  socket.on('message.send',function(data) {
    io.emit('message.sent', data)
  });
});

io.on('connection', function (socket) {
  io.emit('user.add', socket.id);

  socket.on('disconnect', function () {
  io.emit('user.remove', socket.id)
      });
});

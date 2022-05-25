const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connects to the chat
io.on('connection', socket => {
    console.log('New WebSocket connection');

    socket.emit('message', 'Welcome to PrayneChat');

    socket.broadcast.emit('message', 'A user has joined the chatroom');

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chatroom');
    });
});

const PORT = 5500 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
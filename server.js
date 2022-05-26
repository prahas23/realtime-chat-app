const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const creator = 'Prayne';

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Run when client connects to the chat
io.on('connection', socket => {
    console.log('New WebSocket connection');

    socket.on('join', (username) => {
        console.log(username);
    });

    // Welcome the user
    socket.emit('message', formatMessage(creator, 'Welcome to PrayneChat!'));

    // Broadcast when a user joins the room
    socket.broadcast.emit('message', formatMessage(creator, `A user has joined the chatroom`));

    // Listen for the chill room message
    socket.on('chillMessage', (msg) => {
        io.emit('message', formatMessage('USER', msg));
    });

    // Run when client disconnect from the chat
    socket.on('disconnect', () => {
        io.emit('message', formatMessage(creator, `A user has left the chatroom`));
    });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server is running on the port ${PORT}`));
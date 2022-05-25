const chatroomForm = document.getElementById('chill-form');

const socket = io();

socket.on('message', message => {
    console.log(message);
});
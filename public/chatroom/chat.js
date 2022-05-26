const chatroomForm = document.getElementById('chill-form');
const chillMessages = document.querySelector('.chill-messages');
const socket = io();

// Message from the server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);

    // Scroll down
    chillMessages.scrollTop = chillMessages.scrollHeight;
});

// Form submit
chatroomForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the message from input
    const msg = e.target.elements.msg.value;

    // Emit message to the server
    socket.emit('chillMessage', msg);

    // Clear input after sending a message
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// Output message to DOM
let outputMessage = message => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">${message.text}</p>`;
    document.querySelector('.chill-messages').appendChild(div);
}

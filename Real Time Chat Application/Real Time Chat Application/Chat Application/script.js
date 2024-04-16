const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function() {
    console.log('Connected to the WebSocket server.');
};

socket.onerror = function(error) {
    console.error('WebSocket error: ', error);
};

socket.onmessage = function(event) {
    const messageContainer = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.innerText = event.data;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
};

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        socket.send(message.toString()); // Convert message to string before sending
        messageInput.value = '';
    }
}

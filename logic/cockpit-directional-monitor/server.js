const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3007 });

let connectedClient = null;

wss.on('connection', (ws) => {
  connectedClient = ws;
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received data from client: ${message}`);
  });

  ws.on('close', () => {
    connectedClient = null;
    console.log('Client disconnected');
  });
});

module.exports = {
    getConnectedClient: () => connectedClient,
  };
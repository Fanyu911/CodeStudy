const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('New WebSocket connection established');

  ws.on('message', function incoming(message) {
    console.log('Received:', message);
    if (message === 'ping') {
      ws.send('pong');
      console.log('Sent pong to client');
    } else {
      // 处理其他消息
    }
  });

  ws.on('close', function () {
    console.log('WebSocket connection closed');
  });

  ws.on('error', function (err) {
    console.error('WebSocket error:', err);
  });
});

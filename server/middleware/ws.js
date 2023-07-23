import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 3001 })
// 接続処理
wss.on('connection', (wss) => {
  // クライアントからのリクエストを受け取った際の処理
  wss.on('message', (message) => {
    // 送信元を含むすべてのWebSocket接続済みクライアントに送信
    wss.clients.forEach((client) => {
      client.send(message.toString());
    });
  });
});

module.exports = { handler: wss }
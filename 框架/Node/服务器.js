const http = require('http');

const server = http.createServer((req, res) => {
  // 针对纯文本内容，设置相应的Content-Type及UTF-8编码
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('<h1>404 Not Found你好</h1>');
});

server.listen(3000, () => {
  console.log('服务器开启');
});

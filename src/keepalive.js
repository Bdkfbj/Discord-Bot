const http = require('http');

const keepAliveServer = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Server is alive');
});

keepAliveServer.listen(3000, () => {
  console.log('Keep alive server is running on port 3000');
});

module.exports = keepAliveServer;

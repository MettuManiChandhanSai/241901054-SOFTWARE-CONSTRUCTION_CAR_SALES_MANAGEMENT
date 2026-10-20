const http = require('http');
const fs = require('fs');
const path = require('path');

const indexPage = fs.readFileSync(path.join(__dirname, 'public', 'index.html'));

function handleRequest(req, res) {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok', app: 'car-sales-management' }));
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(indexPage);
}

function createServer() {
  return http.createServer(handleRequest);
}

if (require.main === module) {
  // Azure App Service sets PORT; 8080 is the local default.
  createServer().listen(process.env.PORT || 8080);
}

module.exports = { createServer };

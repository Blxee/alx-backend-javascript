const http = require('http');

module.exports = http.createServer((_req, res) => {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);

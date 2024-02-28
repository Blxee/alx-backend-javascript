const http = require('http');
const countStudents = require('./2-read_file');

module.exports = http.createServer((req, res) => {
  if (req.url === '/students') {
    const path = process.argv[2];
    res.write('This is the list of our students\n');
    countStudents(path, res);
  } else {
    res.write('Hello Holberton School!');
  }
  res.end();
}).listen(1245);
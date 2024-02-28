const express = require('express');
const countStudents = require('./2-read_file');

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  const path = process.argv[2];
  countStudents(path, res);
  res.end();
});

app.listen(1245);

module.exports = app;

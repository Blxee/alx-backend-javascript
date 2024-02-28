const express = require('express');
const countStudents = require('./2-read_file');

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  const path = process.argv[2] || '';
  res.status(200);
  res.write('This is the list of our students\n');
  try {
    countStudents(path, res);
  } catch ({ name, message }) {
    res.write(message);
  }
  res.end();
});

app.listen(1245);

module.exports = app;

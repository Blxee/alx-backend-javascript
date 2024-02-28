const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  const path = process.argv[2];
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  let data = fs.readFileSync(path).toString();
  data = data.replace(/.+\n/, '').trim().concat('\n');

  const studentsLen = data.match(/\n/g).length;
  res.write(`Number of students: ${studentsLen}\n`);

  const fields = new Set(data.match(/[^,]+(?=\n)/g));

  for (const field of fields) {
    res.write(`Number of students in ${field}:`);
    let lines = data.split('\n').slice(0, -1);

    lines = lines
      .filter((line) => line.match(field))
      .map((line) => line.match(/[^,]+/).toString());

    res.write(` ${lines.length}.`);
    res.write(` List: ${lines.join(', ')}\n`);
  }
});

app.listen(1245);

module.exports = app;

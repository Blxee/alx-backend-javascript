const fs = require('fs');

module.exports = function countStudents(path, stream = process.stdout) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  let data = fs.readFileSync(path).toString();
  data = data.replace(/.+\n/, '').trim().concat('\n');

  const studentsLen = data.match(/\n/g).length;
  let result = `Number of students: ${studentsLen}\n`;

  const fields = new Set(data.match(/[^,]+(?=\n)/g));

  for (const field of fields) {
    result += `Number of students in ${field}:`;
    let lines = data.split('\n').slice(0, -1);

    lines = lines
      .filter((line) => line.match(field))
      .map((line) => line.match(/[^,]+/).toString());

    result += ` ${lines.length}. List: ${lines.join(', ')}\n`;
  }

  stream.write(result);
};

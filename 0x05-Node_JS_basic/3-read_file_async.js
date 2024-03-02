const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, abort) => {
    if (!fs.existsSync(path)) {
      abort(new Error('Cannot load the database'));
    }

    let data = fs.readFileSync(path).toString();
    data = data.replace(/.+\n/, '').trim().concat('\n');

    const studentsLen = data.match(/\n/g).length;
    console.log(`Number of students: ${studentsLen}`);

    const fields = new Set(data.match(/[^,]+(?=\n)/g));

    for (const field of fields) {
      process.stdout.write(`Number of students in ${field}:`);
      let lines = data.split('\n');

      lines = lines
        .filter((line) => line.match(field))
        .map((line) => line.match(/[^,]+/).toString());

      process.stdout.write(` ${lines.length}.`);
      console.log(` List: ${lines.join(', ')}`);
    }
    resolve();
  });
};

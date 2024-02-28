const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path)) {
      reject(new Error('file does not exist'));
    }

    let data = fs.readFileSync(path).toString();
    data = data.replace(/.+\n/, '').trim().concat('\n');

    const fields = new Set(data.match(/[^,]+(?=\n)/g));

    const result = {};
    for (const field of fields) {
      let lines = data.split('\n');

      lines = lines
        .filter((line) => line.match(field))
        .map((line) => line.match(/[^,]+/).toString());

      result[field] = lines;
    }

    resolve(result);
  });
};

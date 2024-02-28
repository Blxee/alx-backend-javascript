const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];

    readDatabase(path)
      .then((val) => {
        let result = 'This is the list of our students\n';

        const fields = Object.keys(val).sort();
        for (const field of fields) {
          const namesCount = val[field].length;
          const names = val[field].join(', ');
          result += `Number of students in ${field}: ${namesCount}. List: ${names}\n`;
        }

        response.status(200).send(result);
      })
      .catch((err) => {
        response.status(200).send(err);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const validMajors = ['CS', 'SWE'];

    if (!validMajors.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const path = process.argv[2];

    readDatabase(path)
      .then((val) => {
        const list = val[major].join(', ');
        response.status(200).send(`List: ${list}`);
      })
      .catch((err) => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;

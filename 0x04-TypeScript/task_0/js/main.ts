interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Frodo",
  lastName: "Baggins",
  age: 22,
  location: "Buckland",
}

const student2: Student = {
  firstName: "Bilbo",
  lastName: "Baggins",
  age: 26,
  location: "Middle Earth",
}

const studentsList: Array<Student> = [student1, student2];

document.body.innerHTML = `\
<table style="border: 2px solid black; font-size: 2em; margin: 1em auto;">
  <tr>
    <th>First Name</th>
    <th>Location</th>
  </tr>
  ${studentsList.map(({firstName, location}) => {
    return `\
    <tr>
      <td style="border: 2px solid black">${firstName}</td>
      <td style="border: 2px solid black">${location}</td>
    </tr>`;
  }).join('')}
</table>\
`;

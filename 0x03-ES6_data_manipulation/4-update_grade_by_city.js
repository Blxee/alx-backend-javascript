export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter(({ location }) => location === city)
    .map((student) => {
      const studentGrade = grades.find(({ studentId }) => studentId === student.id);
      const grade = studentGrade ? studentGrade.grade : 'N/A';
      return { ...student, grade };
    });
}

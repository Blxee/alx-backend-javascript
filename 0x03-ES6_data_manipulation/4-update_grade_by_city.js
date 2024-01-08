export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter(({ location }) => location === city)
    .map(({ id, ...student }) => ({
      id,
      ...student,
      grade: grades.find(({ studentId }) => studentId === id)?.grade || 'N/A',
    }));
}

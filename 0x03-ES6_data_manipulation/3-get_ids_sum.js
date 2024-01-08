export default function getStudentIdsSum(array) {
  return array
    .map((student) => student.id)
    .reduce((acc, id) => acc + id);
}

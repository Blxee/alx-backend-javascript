export default function getStudentsByLocation(array, location) {
  return array.filter((x) => x.location === location);
}

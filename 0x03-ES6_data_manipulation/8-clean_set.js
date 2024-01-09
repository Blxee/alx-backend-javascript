export default function cleanSet(set, prefix) {
  const arr = new Array(...set)
    .filter((str) => str.startsWith(prefix))
    .map((str) => str.replace(prefix, ''));
  return arr.join('-');
}

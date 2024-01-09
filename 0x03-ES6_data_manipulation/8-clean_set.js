export default function cleanSet(set, prefix) {
  if (!prefix) return '';
  const arr = new Array(...set)
    .filter((str) => str.startsWith(prefix))
    .map((str) => str.replace(prefix, ''));
  return arr.join('-');
}

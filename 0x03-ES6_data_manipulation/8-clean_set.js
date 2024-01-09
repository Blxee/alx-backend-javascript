export default function cleanSet(inputSet, startString) {
  if (!startString || !inputSet || typeof startString !== 'string') {
    return '';
  }
  const arr = new Array(...inputSet)
    .filter((str) => str.startsWith(startString))
    .map((str) => str.substring(startString.length));
  return arr.join('-');
}

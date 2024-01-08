export default function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);

  if (set.size !== arraySet.size) return false;

  for (let i = 0; i < set.size; i += 1) {
    if (arraySet[i] !== set[i]) return false;
  }

  return true;
}

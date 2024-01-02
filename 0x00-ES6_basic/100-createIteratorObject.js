export default function createIteratorObject(report) {
  const array = [...Object.values(report.allEmployees).flat()];

  return {
    * [Symbol.iterator]() {
      for (const value of array) {
        yield value;
      }
    },
  };
}

export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuffer);
  dataView.setInt8(position, value);
  return arrayBuffer;
}

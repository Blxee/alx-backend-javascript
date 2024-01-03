export default function guardrail(mathFunction) {
  const qeue = ['Guardrail was processed'];
  let retValue;

  try {
    retValue = mathFunction();
  } catch (error) {
    retValue = `${error.name}: ${error.message}`;
  }

  qeue.unshift(retValue);
  return qeue;
}

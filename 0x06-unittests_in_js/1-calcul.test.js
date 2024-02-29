const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('Test suit for calculateNumber', function() {
  it('Test round sum for calculateNumber', function() {
    assert.equal(calculateNumber('SUM', 5.1, 4.8), 10, '5.1 + 4.8 is not 10');
    assert.equal(calculateNumber('SUM', 5.8, 4.1), 10, '5.8 + 4.1 is not 10');
  });
  it('Test round subtract for calculateNumber', function() {
    assert.equal(calculateNumber('SUBTRACT', 5.1, 4.8), 0, '5.1 - 4.8 is not 0');
    assert.equal(calculateNumber('SUBTRACT', 5.8, 4.1), 2, '5.8 - 4.1 is not 2');
  });
  it('Test round divide for calculateNumber', function() {
    assert.equal(calculateNumber('DIVIDE', 5.1, 4.8), 1, '5.1 / 4.8 is not 1');
    assert.equal(calculateNumber('DIVIDE', 5, 2), 2.5, '5 / 2 is not 2.5');
    assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error', '5.8 / 4.1 is not Error');
  });
});

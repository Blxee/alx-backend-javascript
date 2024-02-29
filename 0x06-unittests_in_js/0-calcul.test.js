const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe('Test suit for calculateNumber', function() {
  it('Test round sum for calculateNumber', function() {
    assert.equal(calculateNumber(5.1, 4.8), 10, '5.1 + 4.8 is not 10');
    assert.equal(calculateNumber(5.8, 4.1), 10, '5.8 + 4.1 is not 10');
  });
});

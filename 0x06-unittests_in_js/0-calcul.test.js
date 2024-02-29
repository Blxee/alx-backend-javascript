import calculateNumber from './0-calcul.js';
import assert from 'assert';

describe('Test suit for calculateNumber', function() {
  it('Test round sum for calculateNumber', function() {
    assert(calculateNumber(5.1, 4.8) === 10, '5.1 + 4.8 is not 10');
    assert(calculateNumber(5.8, 4.1) === 10, '5.8 + 4.1 is not 10');
  });
});

const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe('Test suit for calculateNumber', function() {
  it('Test round sum for calculateNumber', function() {
    expect(calculateNumber('SUM', 5.1, 4.8)).to.equal(10);
    expect(calculateNumber('SUM', 5.8, 4.1)).to.equal(10);
  });
  it('Test round subtract for calculateNumber', function() {
    expect(calculateNumber('SUBTRACT', 5.1, 4.8)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 5.8, 4.1)).to.equal(2);
  });
  it('Test round divide for calculateNumber', function() {
    expect(calculateNumber('DIVIDE', 5.1, 4.8)).to.equal(1);
    expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
    expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
  });
});

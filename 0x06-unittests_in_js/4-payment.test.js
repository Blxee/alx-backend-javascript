const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment')

describe('Test suit for sendPaymentRequestToApi function', function() {
  it('Test that calculateNumber is called', function() {
    const calculateNumber = sinon.stub(Utils, 'calculateNumber');
    calculateNumber.returns(10);
    const log = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(calculateNumber, 'SUM', 100, 20);
    sinon.assert.calledWith(log, 'The total is: 10');

    calculateNumber.restore();
    log.restore();
  });
});

const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')

describe('Test suit for sendPaymentRequestToApi function', function() {
  it('Test that calculateNumber is called', function() {
    const calculateNumber = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calculateNumber, 'SUM', 100, 20);
  });
});

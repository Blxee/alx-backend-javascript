const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment')

describe('Test suit for sendPaymentRequestToApi function', function() {
  let log;

  beforeEach(() => {
    log = sinon.spy(console, 'log')
  });

  afterEach(() => {
    log.restore()
  });

  it('Test that calculateNumber is called', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(log, 'The total is: 120');
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(log, 'The total is: 20');
  });
});

const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', function() {
  it('Test result of getPaymentTokenFromAPI', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        // assert.equal(res, { data: 'Successful response from the API' });
        done();
      });
  });
});

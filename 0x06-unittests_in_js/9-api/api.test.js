const request = require('request');
const assert = require('assert');

describe('Test api', function() {
  it('Test / route', function(done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (error || !response)
        done();

      assert(response.statusCode === 200);
      assert(body === 'Welcome to the payment system');
      done();
    });
  });

  it('Test /cart/<id> route invalid', function(done) {
    request('http://localhost:7865/cart/not', (error, response, body) => {
      if (error || !response)
        done();

      assert(response.statusCode === 404);
      done();
    });
  });

  it('Test /cart/<id> route valid', function(done) {
    request('http://localhost:7865/cart/89', (error, response, body) => {
      if (error || !response)
        done();

      assert(response.statusCode === 200);
      assert(body === 'Payment methods for cart 89');
      done();
    });
  });
})

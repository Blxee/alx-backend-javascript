const request = require('request');
const assert = require('assert');

describe('Test index /', function() {
  it('Test', function(done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (error || !response)
        done();

      assert(response.statusCode === 200);
      assert(body === 'Welcome to the payment system');
      done();
    });
  });
})

const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');

describe('getPaymentTokenFromAPI', () => {
  describe('check async function response', () => {
    it('should work', (done) => {
      getPaymentTokenFromAPI(true)
        .then((response) => {
          chai.expect(response).to.include({ data: 'Successful response from the API' });
          done();
        })
        .catch((error) => done(error));
    });
  });
});

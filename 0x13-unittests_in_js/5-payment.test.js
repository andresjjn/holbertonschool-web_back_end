const sinon = require('sinon');
const chai = require('chai');

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('Loop hooks', function () {
  let clgSpy;
  beforeEach(function () {
    clgSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    clgSpy.restore();
  });

  it('check', () => {
    sendPaymentRequestToApi(2, 2);

    chai.expect(clgSpy.calledOnceWithExactly('The total is: 4')).to.be.true;
    chai.expect(clgSpy.calledOnce).to.be.true;
  });

  it('check', () => {
    sendPaymentRequestToApi(2, 6);

    chai.expect(clgSpy.calledOnceWithExactly('The total is: 8')).to.be.true;
    chai.expect(clgSpy.calledOnce).to.be.true;
  });
});

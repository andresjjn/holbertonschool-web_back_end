const chai = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('stubs', () => {
  it('check', () => {
    const utilsStub = sinon.stub(Utils, 'calculateNumber');
    utilsStub.returns(10);
    const clgSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(2, 2);

    chai.expect(utilsStub.calledOnceWithExactly('SUM', 2, 2)).to.be.true;
    chai.expect(clgSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    utilsStub.restore();
    clgSpy.restore();
  });
});

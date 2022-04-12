const chai = require('chai');
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sinon spy', () => {
    it('check equal', () => {
        const utilsSpy = sinon.spy(Utils, 'calculateNumber');
        const clgSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(2, 2);

        chai.expect(utilsSpy.calledOnceWithExactly('SUM', 2, 2)).to.be.true;
        chai.expect(clgSpy.calledOnceWithExactly('The total is: 4')).to.be.true;

        utilsSpy.restore();
        clgSpy.restore();
    });
});

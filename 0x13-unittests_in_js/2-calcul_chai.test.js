const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('Sum Two Integers', () => {
    it('should be 4', () => {
      chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
  });

  describe('Substract Two Integers', () => {
    it('should be 2', () => {
      chai.expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
  });

  describe('Divide Two Integers', () => {
    it('should be 1.5', () => {
      chai.expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });
  });

  describe('Divide by 0', () => {
    it('should be Error', () => {
      chai.expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
    });
  });
});

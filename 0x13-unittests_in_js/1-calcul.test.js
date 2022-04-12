const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('Sum Two Integers', () => {
    it('should be 4', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });
  });

  describe('Substract Two Integers', () => {
    it('should be 2', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });
  });

  describe('Divide Two Integers', () => {
    it('should be 1.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 2), 1.5);
    });
  });

  describe('Divide by 0', () => {
    it('should be Error', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2, 0), 'Error');
    });
  });
});

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('Two Integers', () => {
    it('should be 4', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  describe('One round', () => {
    it('should be 5', () => {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });

  describe('Two round', () => {
    it('should be 5', () => {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('Two round reversed', () => {
    it('should be 5', () => {
      assert.strictEqual(calculateNumber(3.7, 1.2), 5);
    });
  });

  describe('Two round again floor both', () => {
    it('should be 6', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });
});

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it('returns true', () => {
    const output = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const output = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.isFalse(output);
  });

  it('returns true', () => {
    const output = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const output = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.isFalse(output);
  });

  it('returns true', () => {
    const output = eqArrays([], []);
    assert.isTrue(output);
  });

  it('returns true', () => {
    const output = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const output = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    assert.isFalse(output);
  });

  it('returns false', () => {
    const output = eqArrays([[2, 3], [4]], [[2, 3], 4]);
    assert.isFalse(output);
  });

  it('returns true', () => {
    const output = eqArrays([2, [3, [4, 5, { six: 6, seven: [7, 8] },]]], [2, [3, [4, 5, { six: 6, seven: [7, 8] }]]]);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const output = eqArrays([2, [3, [4, 5, { six: 6, seven: [7, 8] },]]], [2, [3, [4, 5, { six: 6, seven: [7] }]]]);
    assert.isFalse(output);
  });

});
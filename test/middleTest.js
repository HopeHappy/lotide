const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('returns [] for [1]', () => {
    const input = [1];
    const output = middle(input);
    const expectedResult = [];
    assert.deepEqual(output, expectedResult);
  });

  it('returns [] for [1, 2]', () => {
    const input = [1, 2];
    const output = middle(input);
    const expectedResult = [];
    assert.deepEqual(output, expectedResult);
  });

  it('returns [2] for [1, 2, 3]', () => {
    const input = [1, 2, 3];
    const output = middle(input);
    const expectedResult = [2];
    assert.deepEqual(output, expectedResult);
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    const input = [1, 2, 3, 4, 5];
    const output = middle(input);
    const expectedResult = [3];
    assert.deepEqual(output, expectedResult);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const output = middle(input);
    const expectedResult = [2, 3];
    assert.deepEqual(output, expectedResult);
  });
  
  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = middle(input);
    const expectedResult = [3, 4];
    assert.deepEqual(output, expectedResult);
  });

});
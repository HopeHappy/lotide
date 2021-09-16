const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {

  it('return [1, 2, 3, 4, 5, 6]', () => {
    const input = [1, 2, [3, 4], 5, [6]];
    const output = flatten(input);
    const expectedResult = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(output, expectedResult);
  });

  it('return [1, 2, 3, 4, 5, 6]', () => {
    const input = [1, [2, [3, [4]]], 5, [6]];
    const output = flatten(input);
    const expectedResult = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(output, expectedResult);
  });

});
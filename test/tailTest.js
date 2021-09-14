const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('returns [2, 3, 4] for [1, 2, 3, 4]', () => {
    const input = [1, 2, 3, 4];
    const output = tail(input);
    const expectedResult = [2, 3, 4];
    assert.deepEqual(output, expectedResult);
  });

  it('returns [] for ["Hannah"]', () => {
    const input = ["Hannah"];
    const output = tail(input);
    const expectedResult = [];
    assert.deepEqual(output, expectedResult);
  });

  it('returns [] for []', () => {
    const input = [];
    const output = tail(input);
    const expectedResult = [];
    assert.deepEqual(output, expectedResult);
  });

});
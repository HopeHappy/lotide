const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {

  it('returns [ 1, 2, 5, 7, 2 ]', () => {
    const input = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const output = takeUntil(input, x => x < 0);
    const expectedResult = [ 1, 2, 5, 7, 2 ];
    assert.deepEqual(output, expectedResult);
  });

  it("returns [ 'I\'ve', 'been', 'to', 'Hollywood' ]", () => {
    const input = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const output = takeUntil(input, x => x === ',');
    const expectedResult = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
    assert.deepEqual(output, expectedResult);
  });

});
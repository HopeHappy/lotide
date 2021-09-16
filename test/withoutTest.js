const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {

  it('returns ["hello", "world"]', () => {
    const words = ["hello", "world", "lighthouse"];
    const output = without(words, ["lighthouse"]);
    const expectedResult = ["hello", "world"];
    assert.deepEqual(output, expectedResult);
  });

});
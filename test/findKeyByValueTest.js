const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('returns drama', () => {
    const output = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expectedResult = 'drama';
    assert.strictEqual(output, expectedResult);
  });

  it('returns undefined', () => {
    const output = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    assert.isUndefined(output);
  });

});
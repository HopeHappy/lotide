const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  const input = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  const output = countOnly(input, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it('returns 1 for ["Jason"]', () => {
    const expectedResult = 1;
    assert.strictEqual(output.Jason, expectedResult);
  });

  it('returns undefined for ["Karima"]', () => {
    assert.isUndefined(output.Karima);
  });

  it('returns 2 for ["Fang"]', () => {
    const expectedResult = 2;
    assert.strictEqual(output.Fang, expectedResult);
  });

  it('returns undefined for ["Agouhanna"]', () => {
    assert.isUndefined(output.Agouhanna);
  });

});
const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {

  it('returns 5 for [5, 6, 7]', () => {
    const input = [5, 6, 7];
    const output = head(input);
    const expectedResult = 5;
    assert.strictEqual(output, expectedResult);
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    const input = ["Hello", "Lighthouse", "Labs"];
    const output = head(input);
    const expectedResult = "Hello";
    assert.strictEqual(output, expectedResult);
  });

  it('returns "Hannah" for ["Hannah"]', () => {
    const input = ["Hannah"];
    const output = head(input);
    const expectedResult = "Hannah";
    assert.strictEqual(output, expectedResult);
  });

  it('returns undefined for []', () => {
    const input = [];
    const output = head(input);
    assert.isUndefined(output);
  });

});

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hannah"]), "Hannah");
// assertEqual(head([]), undefined);
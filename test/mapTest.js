const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {

  it("returns ['g', 'c', 't', 'm', 't']", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const output = map(words, word => word[0]);
    const expectedResult = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(output, expectedResult);
  });

  it("returns [6, 7, 2, 5, 3]", () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const output = map(words, word => word.length);
    const expectedResult = [6, 7, 2, 5, 3];
    assert.deepEqual(output, expectedResult);
  });

  it("returns [2, 4, 6, 8]", () => {
    const numbers = [1, 2, 3, 4];
    const output = map(numbers, number => number * 2);
    const expectedResult = [2, 4, 6, 8];
    assert.deepEqual(output, expectedResult);
  });

});
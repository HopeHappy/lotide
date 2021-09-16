const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  const input = 'lighthouse in the house';
  const output = countLetters(input);

  it('returns 1 for letter l', () => {
    const expectedResult = 1;
    assert.strictEqual(output.l, expectedResult);
  });

  it('returns 2 for letter i', () => {
    const expectedResult = 2;
    assert.strictEqual(output.i, expectedResult);
  });

  it('returns 1 for letter g', () => {
    const expectedResult = 1;
    assert.strictEqual(output.g, expectedResult);
  });

  it('returns 4 for letter h', () => {
    const expectedResult = 4;
    assert.strictEqual(output.h, expectedResult);
  });

  it('returns 2 for letter t', () => {
    const expectedResult = 2;
    assert.strictEqual(output.t, expectedResult);
  });

  it('returns 2 for letter o', () => {
    const expectedResult = 2;
    assert.strictEqual(output.o, expectedResult);
  });

  it('returns 2 for letter u', () => {
    const expectedResult = 2;
    assert.strictEqual(output.u, expectedResult);
  });

  it('returns 2 for letter s', () => {
    const expectedResult = 2;
    assert.strictEqual(output.s, expectedResult);
  });

  it('returns 3 for letter e', () => {
    const expectedResult = 3;
    assert.strictEqual(output.e, expectedResult);
  });

  it('returns 1 for letter n', () => {
    const expectedResult = 1;
    assert.strictEqual(output.n, expectedResult);
  });

});
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {

  it('returns true', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const output = eqObjects(ab, ba);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const output = eqObjects(ab, abc);
    assert.isFalse(output);
  });

  it('returns true', () => {
    const empty1 = {};
    const empty2 = {};
    const output = eqObjects(empty1, empty2);
    assert.isTrue(output);
  });

  it('returns true', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const output = eqObjects(cd, dc);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const output = eqObjects(cd, cd2);
    assert.isFalse(output);
  });

  it('returns true', () => {
    const ef = { e: "1", f: { three: 3 } };
    const fe = { f: { three: 3 }, e: "1" };
    const output = eqObjects(ef, fe);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const gh = { g: "1", h: { three: 4 } };
    const hg = { h: { three: 3 }, g: "1" };
    const output = eqObjects(gh, hg);
    assert.isFalse(output);
  });

  it('returns true', () => {
    const object1 = { a: { z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    const output = eqObjects(object1, object2);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const object3 = { a: { y: 0, z: 1 }, b: 2 };
    const object4 = { a: { z: 1 }, b: 2 };
    const output = eqObjects(object3, object4);
    assert.isFalse(output);
  });

  it('returns false', () => {
    const object5 = { a: { y: 0, z: 1 }, b: 2 };
    const object6 = { a: 1, b: 2 };
    const output = eqObjects(object5, object6);
    assert.isFalse(output);
  });

  it('returns true', () => {
    const object7 = { a: { x: { y: 2, z: 0 }, w: 1 }, b: { c: 2, d: 3 } };
    const object8 = { a: { x: { y: 2, z: 0 }, w: 1 }, b: { c: 2, d: 3 } };
    const output = eqObjects(object7, object8);
    assert.isTrue(output);
  });

  it('returns false', () => {
    const object9 = { a: { x: { y: 2, z: 0 }, w: 1}, b: { c: 2, d: 3 } };
    const object10 = { a: { x: { y: 2, z: 0 }, w: 1, v: 0 }, b: { c: 2, d: 3 } };
    const output = eqObjects(object9, object10);
    assert.isFalse(output);
  });

  it('returns false', () => {
    const object11 = { a: { x: { y: 2, z: 0 }, w: 1 }, b: { c: 2, d: 3 } };
    const object12 = { a: { x: { y: 2, z: 1 }, w: 1 }, b: { c: 2, d: 3 } };
    const output = eqObjects(object11, object12);
    assert.isFalse(output);
  });

});
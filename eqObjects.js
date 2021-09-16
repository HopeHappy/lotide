// Test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Helper function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Function that takes in 2 objects and return true if they are equal and false otherwise
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  // The number of keys is not equal
  if (key1.length !== key2.length) {
    return false;
  }
  // Both of target object are empty
  if (key1.length === 0) {
    return true;
  }
  // Loops each key-value pair of both objects
  for (let key of key1) {
    const isArr1 = object1[key] instanceof Array;
    const isObj1 = object1[key] instanceof Object;
    const isArr2 = object2[key] instanceof Array;
    const isObj2 = object2[key] instanceof Object;

    // When both values are arrays
    if (isArr1 && isArr2) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // When both values are objects
    } else if ((isObj1 && !isArr1) && (isObj2 && !isArr2)) {
      if (!eqObjects(object1[key], object2[key])) { // use recursion
        return false;
      }
    // When one or both values are primitive data
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

// Test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const a = {};
const b = {};
assertEqual(eqObjects(a, b), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const ef = { e: "1", f: {three: 3} };
const fe = { f: {three: 3}, e: "1" };
assertEqual(eqObjects(ef, fe), true);

const gh = { g: "1", h: {three: 4} };
const hg = { h: {three: 3}, g: "1" };
assertEqual(eqObjects(gh, hg), false);

const object1 = { a: { z: 1 }, b: 2 };
const object2 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(object1, object2), true); // => true

const object3 = { a: { y: 0, z: 1 }, b: 2 };
const object4 = { a: { z: 1 }, b: 2 };
assertEqual(eqObjects(object3, object4), false); // => false

const object5 = { a: { y: 0, z: 1 }, b: 2 };
const object6 = { a: 1, b: 2 };
assertEqual(eqObjects(object5, object6), false); // => false

const object7 = { a: { x: { y: 2, z: 0 }, w: 1 }, b: { c: 2, d: 3 } };
const object8 = { a: { x: { y: 2, z: 0 }, w: 1 }, b: { c: 2, d: 3 } };
assertEqual(eqObjects(object7, object8), true); // => true

const object9 = { a: { x: { y: 2, z: 0 }, w: 1}, b: { c: 2, d: 3 } };
const object10 = { a: { x: { y: 2, z: 0 }, w: 1, v: 0 }, b: { c: 2, d: 3 } };
assertEqual(eqObjects(object9, object10), false); // => false

const object11 = { a: { x: { y: 2, z: 0 }, w: 1 }, b: { c: 2, d: 3 } };
const object12 = { a: { x: { y: 2, z: 1 }, w: 1 }, b: { c: 2, d: 3 } };
assertEqual(eqObjects(object11, object12), false); // => false
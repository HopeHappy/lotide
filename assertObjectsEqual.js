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

// Helper function
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
      if (!eqObjects(object1[key], object2[key])) {
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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({ e: "1", f: {three: 3} }, { f: {three: 3}, e: "1" });
assertObjectsEqual({ g: "1", h: {three: 4} }, { h: {three: 3}, g: "1" });
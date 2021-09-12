// Test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Helper function
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

// Function that takes in 2 arrays and returns true if the arrays are equal and false otherwise
const eqArrays = function(array1, array2) {
  // The length of arrays is not equal
  if (array1.length !== array2.length) {
    return false;
  }
  // Both target arrays are empty
  if (array1.length === 0) {
    return true;
  }
  // Loops each item of both arrays
  for (let i = 0; i < array1.length; i++) {
    const isArr1 = array1[i] instanceof Array;
    const isObj1 = array1[i] instanceof Object;
    const isArr2 = array2[i] instanceof Array;
    const isObj2 = array2[i] instanceof Object;
    // When both values are arrays
    if (isArr1 && isArr2) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    // When both values are objects
    } else if ((!isArr1 && isObj1) && (!isArr2 && isObj2)) {
      if (!eqObjects(array1[i], array2[i])) {
        return false;
      }
    // When one or both values are primitive data
    } else {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
assertEqual(eqArrays([2, [3, [4, 5, {six: 6, seven: [7, 8]},]]], [2, [3, [4, 5, {six: 6, seven: [7, 8]}]]]), true);
assertEqual(eqArrays([2, [3, [4, 5, {six: 6, seven: [7, 8]},]]], [2, [3, [4, 5, {six: 6, seven: [7]}]]]), false);
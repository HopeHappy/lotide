// Test function
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✅✅✅Assertion Passed: ', array1, '===', array2);
  } else {
    console.log('❌❌❌Assertion Failed: ', array1, '!==', array2);
  }
};

// Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
const map = function(arr, cb) {
  const results = [];
  for (let element of arr) {
    results.push(cb(element));
  }
  return results;
};

module.exports = map;

// Test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const expectedResults1 = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(results1, expectedResults1);

const results2 = map(words, word => word.length);
const expectedResults2 = [6, 7, 2, 5, 3];
assertArraysEqual(results2, expectedResults2);

const numbers = [1, 2, 3, 4];
const results3 = map(numbers, number => number * 2);
const expectedResults3 = [2, 4, 6, 8];
assertArraysEqual(results3, expectedResults3);
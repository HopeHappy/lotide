// Functions that takes in an array and returns middle most element of the array.
const middle = function(arr) {
  const result = [];

  if (arr.length <= 2) return result;

  if (!(arr.length % 2)) {
    const indexTwo = (arr.length / 2);
    const indexOne = (arr.length / 2) - 1;
    result.push(arr[indexOne], arr[indexTwo]);
  } else {
    const index = Math.floor(arr.length / 2);
    result.push(arr[index]);
  }

  return result;
};

// Test functions
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

// Test code
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
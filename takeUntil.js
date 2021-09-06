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

// Functions that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
const takeUntil = function(arr, cb) {
  const results = [];

  for (let element of arr) {
    if (cb(element)) break;
    results.push(element);
  }
  
  return results;
};

// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expectedResults1 = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1, expectedResults1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedResults2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, expectedResults2);
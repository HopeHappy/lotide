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

// Functions takes in a string and returns all indices of letter positions in the string
const letterPositions = function(str) {
  const results = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }

    if (!results[str[i]]) {
      results[str[i]] = [i];
      // results[str[i]].push(i);
      continue;
    }
    results[str[i]].push(i);
  }

  return results;
};

// Test code
const results1 = letterPositions('hello');
assertArraysEqual(results1.h, [0]);
assertArraysEqual(results1.e, [1]);
assertArraysEqual(results1.l, [2, 3]);
assertArraysEqual(results1.o, [4]);

const results2 = letterPositions('lighthouse in the house');
assertArraysEqual(results2.l, [0]);
assertArraysEqual(results2.i, [1, 11]);
assertArraysEqual(results2.g, [2]);
assertArraysEqual(results2.h, [3, 5, 15, 18]);
assertArraysEqual(results2.t, [4, 14]);
assertArraysEqual(results2.o, [6, 19]);
assertArraysEqual(results2.u, [7, 20]);
assertArraysEqual(results2.s, [8, 21]);
assertArraysEqual(results2.e, [9, 16, 22]);
assertArraysEqual(results2.n, [12]);
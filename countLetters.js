// Test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function that takes in a sentence and returns a count of each of the letters in the sentence
const countLetters = function(str) {
  const results = {};
  const strWithouSpace = str.split(' ').join('');
  
  for (let char of strWithouSpace) {
    if (!results[char]) {
      results[char] = 1;
      continue;
    }
    results[char]++;
  }

  return results;
};

// Test code
const results = countLetters('lighthouse in the house');
assertEqual(results.l, 1);
assertEqual(results.i, 2);
assertEqual(results.g, 1);
assertEqual(results.h, 4);
assertEqual(results.t, 2);
assertEqual(results.o, 2);
assertEqual(results.u, 2);
assertEqual(results.s, 2);
assertEqual(results.e, 3);
assertEqual(results.n, 1);
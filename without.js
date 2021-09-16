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

const without = function(source, itemsToRemove) {
  const result = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;
// const without = function(source, itemsToRemove) {
//   return source.filter(element => itemsToRemove.indexOf(element) === -1);
// };

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
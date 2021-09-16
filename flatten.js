// Function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array
const flatten = function(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = flatten;
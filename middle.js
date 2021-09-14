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

module.exports = middle;
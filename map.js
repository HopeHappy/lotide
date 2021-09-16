// Function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
const map = function(arr, cb) {
  const results = [];
  for (let element of arr) {
    results.push(cb(element));
  }
  return results;
};

module.exports = map;
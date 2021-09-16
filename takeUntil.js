// Functions that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
const takeUntil = function(arr, cb) {
  const results = [];

  for (let element of arr) {
    if (cb(element)) break;
    results.push(element);
  }
  
  return results;
};

module.exports = takeUntil;
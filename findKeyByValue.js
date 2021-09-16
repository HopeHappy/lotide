// Function that takes in an object and a value and returns the first key that corresponds to that value
const findKeyByValue = function(obj, value) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
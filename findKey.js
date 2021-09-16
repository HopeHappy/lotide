// Function that takes in an object and callback and returns the first key that meets the criteria specified in callback
const findKey = function(obj, cd) {
  for (let key of Object.keys(obj)) {
    if (cd(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;
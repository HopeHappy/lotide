// Function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array
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
// Function that takes in a collection of items and returns a specific subset of those items.
const countOnly = function(allItems, itemsToCount) {
  const result = {};

  for (let item of allItems) {
    if (itemsToCount[item] && !result[item]) {
      result[item] = 1;
    } else if (itemsToCount[item] && result[item]) {
      result[item]++;
    }
  }

  return result;
};

module.exports = countOnly;
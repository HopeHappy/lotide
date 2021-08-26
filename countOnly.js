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

// Test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
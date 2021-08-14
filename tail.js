const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  const newArray = array.filter(number => array.indexOf(number) !== 0);
  return newArray;
};

assertEqual(tail([1, 2, 3, 4]).length, 3);
assertEqual(tail([1, 2, 3, 4])[0], 2);
assertEqual(tail([1, 2, 3, 4])[1], 3);
assertEqual(tail([1, 2, 3, 4])[2], 4);

assertEqual(tail(["Hannah"]).length, 0);
assertEqual(tail(["Hannah"])[0], undefined);


assertEqual(tail([]).length, 0);
assertEqual(tail([])[0], undefined);
// Function that takes in an array and returns everything except the first element of the array
const tail = function(array) {
  const newArray = array.filter(number => array.indexOf(number) !== 0);
  return newArray;
};

module.exports = tail;
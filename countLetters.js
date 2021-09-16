// Function that takes in a sentence and returns a count of each of the letters in the sentence
const countLetters = function(str) {
  const results = {};
  const strWithouSpace = str.split(' ').join('');
  
  for (let char of strWithouSpace) {
    if (!results[char]) {
      results[char] = 1;
      continue;
    }
    results[char]++;
  }

  return results;
};

module.exports = countLetters;
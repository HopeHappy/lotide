// Functions takes in a string and returns all indices of letter positions in the string
const letterPositions = function(str) {
  const results = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }

    if (!results[str[i]]) {
      results[str[i]] = [i];
      continue;
    }
    results[str[i]].push(i);
  }

  return results;
};

module.exports = letterPositions;
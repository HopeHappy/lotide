const head = require('./head');
const tail = require('./tail');
const eqArrays = require('./eqArrays');
const without = require('./without');
const flatten = require('./flatten');
const middle = require('./middle');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const map = require('./map');
const takeUntil = require('./takeUntil');
const findKey = require('./findKey');

module.exports = {
  head: head,
  tail: tail,
  eqArrays: eqArrays,
  without: without,
  flatten: flatten,
  middle: middle,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  map: map,
  takeUntil: takeUntil,
  findKey: findKey
};
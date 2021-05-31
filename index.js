const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const {assertArraysEquals} = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const min = require('./min');
const sum = require('./sum');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEquals: assertArraysEquals,
 assertEqual: assertEqual,
 assertObjectsEqual: assertObjectsEqual,
 countLetters: countLetters,
 countOnly: countOnly,
 eqArrays: eqArrays,
 eqObjects: eqObjects,
 findKey: findKey,
 findKeyByValue: findKeyByValue,
 flatten: flatten,
 letterPositions: letterPositions,
 map: map,
 min: min,
 sum: sum,
 takeUntil: takeUntil, 
 without: without
};
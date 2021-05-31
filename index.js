const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const {assertArraysEquals} = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eArrays');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEquals: assertArraysEquals,
 assertEqual: assertEqual,
 assertObjectsEqual: assertObjectsEqual,
 countLetters: countLetters,
 countOnly: countOnly,
 eqArrays: eqArrays
};
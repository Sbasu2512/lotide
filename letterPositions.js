const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

const letterPositions = function(sentence) {
  let result = {};
  const final = {};
  // logic to update results here
  for (let letter of sentence) {
    if (result[letter]) {
      final[letter] += 1;
    } else {
      final[letter] = 1;
    }
  }
 console.log(typeof(final));
  return final ;
};

console.log(letterPositions("Hello"));
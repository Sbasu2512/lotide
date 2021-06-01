const eqArrays = require('../eArrays.js');
const assertEqual = require('../assertEqual.js');

console.log(eqArrays([1, 2, 3], [1, 2, 3]));    // => true
console.log();
console.log(eqArrays([1, 2, 3], [3, 2, 1]));  // => false
console.log();
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));  // => true
console.log();
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));  // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 9]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([1, '2', 3], [1, '2', 3]), true);
const assertEqual = require('../assertEqual.js');
const assertArraysEquals = require('../assertArraysEqual.js');

console.log(assertArraysEquals([1, 2, 3], [1, 2, 3]));    // => true
console.log();
console.log(assertArraysEquals([1, 2, 3], [3, 2, 1]));  // => false
console.log();
console.log(assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]));  // => true
console.log();
console.log(assertArraysEquals(["1", "2", "3"], ["1", "2", 3]));  // => false

assertEqual(assertArraysEquals([1, 2, 3], [1, 2, 3]), true);
assertEqual(assertArraysEquals([1, 2, 3], [1, 2, 9]), false);
assertEqual(assertArraysEquals([1, 2, 3], [1, 2]), false);
assertEqual(assertArraysEquals([1, 2, 3], [1, 2, '3']), false);
assertEqual(assertArraysEquals([1, '2', 3], [1, '2', 3]), true);
const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');
//testing code
tail([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(tail([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

//testing assertEqual function
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log();
const ords = ["Labs"];
tail(ords); // no need to capture the return value since we are not checking it
assertEqual(ords.length, 1); // original array should still have 0 elements!
console.log();
console.log(tail(ords));
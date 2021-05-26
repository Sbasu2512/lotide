const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(
      `🤩🤩🤩🤩  Assertion passed: ${actual} === ${expected} 💯💯💯💯`
    );
  } else {
    console.log(
      `🛑🛑🛑🛑  Assertion failed: ${actual} === ${expected} 🛑🛑🛑🛑`
    );
  }
};

//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

function eqArrays(a,b) {
  if(a.length!=b.length)
  return false;
 else
 {
 // comapring each element of array
  for(var i=0;i<a.length;i++)
  if(a[i]!==b[i])
   return false;
   return true;
 }
}
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
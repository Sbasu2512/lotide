/*const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(
      `🤩🤩🤩🤩  Assertion passed: ${actual} === ${expected} 💯💯💯💯`
    );
  } else {
    console.log(
      `🛑🛑🛑🛑  Assertion failed: ${actual} === ${expected} 🛑🛑🛑🛑`
    );
  }
};*/

const assertEqual = require('./assertEqual');

const head = arr => {
 return arr[0];
}

//syntax
head([4,5,2,3,1,9,6]);
//Testing our code
assertEqual(head([3,1,9,6]), 3);
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
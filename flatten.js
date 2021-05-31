/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/
const flatten = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      flatten(item);
    } else {
      console.log(item);
    }
  });
}

module.exports = flatten;
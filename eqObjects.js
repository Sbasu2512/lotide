//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.
const eqObjects = function (obj1, obj2) {
  let match;
  // objects need to have the same number of keys
  let obj1Keys = Object.keys(obj1); // array of keys for obj1
  let obj2Keys = Object.keys(obj2); // array of keys for obj2
  if (obj1Keys.length !== obj2Keys.length) {
    // if not same number of keys, auto fails
    return false;
  } else {
    // value for each key has to be the same for both objects
    for (const key of obj1Keys) {
      // need to check if the value of the key is an array
      // need to check that both values at specified key in both objects are arrays
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        match = eqArrays(obj1[key], obj2[key]); // compare the 2 arrays to see if they are the same
        // match is set to true if they are the same and false if not
        if (!match) {
          return false;
        }
      } else if (
        (Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) ||
        (!Array.isArray(obj1[key]) && Array.isArray(obj2[key]))
      ) {
        // checks if values at specified key are both arrays
        // if not both arrays, then will auto fail
        return false;
      } else if (
        typeof obj1[key] === "object" &&
        typeof obj2[key] === "object"
      ) {
        // checks if the value of the key is an obj for both objects
        return eqObjects(obj1[key], obj2[key]);
      } else if (
        (typeof obj1[key] === "object" && typeof obj2[key] !== "object") ||
        (typeof obj1[key] !== "object" && typeof obj2[key] === "object")
      ) {
        // checks to make sure the values of both obj at given key are objects
        // if not objects, then auto fails
        return false;
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    // if all key-value pairs of the same, false is never returned
    // so they must all be the same, return true at end of loop
    return true;
  }
};
module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba),"should return true")
// //eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc),"should return false")
// //eqObjects(ab, abc); // => false
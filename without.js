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
//Implement without which will return a subset of a given array, removing unwanted element
//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
const without = function(source,itemsToRemove){
  let newArray = [];
  for(let i = 0; i < source.length; i++){
    let flag = 0;
    for(let j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]){
         flag = 1;
      }
    }
    if(flag == 0){
      newArray.push(source[i]);
    }
  }
  return newArray;
}


console.log(without([1,2,5,3,4],[4,5,1]));
/*
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});
*/
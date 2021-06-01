const eqArrays = require('./eArrays');
const assertArraysEqual = require('./assertArraysEqual');
//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
const middle = (arr) => {
let temp = [] ;
let index ;
//For arrays with one or two elements, there is no middle. Return an empty array.
if (arr.length <3){
  return temp;
}else if (arr.length % 2 === 0){
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
index = arr.length/2;
temp = arr.splice(index-1,2) ;          //arr.splice(index,how many elements to remove)
 //return temp;
} else {
//For arrays with odd number of elements, an array containing a single middle element should be returned.
index = Math.floor((arr.length-1)/2)
temp.push(arr[index]) ;
//return temp;
}
return temp;
};

//middle([1, 2, 3, 4, 5])
module.exports = middle ;
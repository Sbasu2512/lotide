/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
*/
//Documentation of how!
/*
const words = ["ground", "control", "to", "major", "tom"];
//Call map and pass in our words and a simple arrow function.
const map = (array,callback) => {
// temporary code:
//console.log('array: ', array);
//console.log('callback: ', callback);
const results = [];
//We now need to populate our results array & Complete the for loop by pushing each item into our results array. And that should complete the logic for our map function!
for (let item of array) {
  //console.log('item BEFORE: ', item);
  //console.log('item AFTER: ', callback(item));
  //console.log('---');
  results.push(callback(item));
}
  return results;
} ;
const results1 = map(words, word => word[0]);
console.log(results1);
*/
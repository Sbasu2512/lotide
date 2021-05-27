/*
Fn will take in two parameters as well:
The array to work with
The callback (which Lodash calls "predicate")
The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
To keep things simple, the callback should only be provided one value: The item in the array.
Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
*/

const takeUntil = function(arr, callback) {
  for (let item of arr) {
    console.log('item BEFORE: ', item);
  console.log('item AFTER: ', callback(item));
  console.log('---');
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);  //[ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);  //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
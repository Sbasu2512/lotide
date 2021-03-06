const middle = require('../middle.js');
const assert = require('chai').assert;

describe("#middle", () => {
//middle([1, 2, 3, 4, 5]) // => [3
it("should be equal to [3] for [1,2,3]", () => {
  const input = middle([1, 2, 3, 4, 5]);
  const output = [3];
  assert.deepEqual(input,output);
});
//middle([1, 2, 3, 4]) // => [2, 3]
it("should be equal to [2,3] for [1,2,5,3]", () => {
  const initial = middle([1, 2, 3, 4]);
  const output = [2,3];
  assert.deepEqual(initial,output);
});
//middle([1]) // => []
it("should return empty array when array length is less than 3", () => {
  const input = middle([1]);
  const output = [];
  assert.deepEqual(input,output);
})
//middle([1, 2]) // => []
it("should return empty array when array length is less than 3",()=> {
  const input = middle([1,2]);
  const output = [];
  assert.deepEqual(input,output);
})
//middle([1, 2, 3]) // => [2]
it("should return [2] for [1,2,3]", () => {
  const input = middle([1,2,3]);
  const output = [2];
  assert.deepEqual(input,output);
});
//middle(['hello','bae','bye','how you doing','where you going','loser']);  //[ 'bye', 'how you doing' ]
it("should return middle two values for odd length of an array", ()=>{
  const input = middle(['hello','bae','bye','how you doing','where you going','loser']);
  console.log(input);
  const output = [ 'bye', 'how you doing' ];
  assert.deepEqual(input, output);
});
});


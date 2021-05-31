const tail = require('../tail.js');
const assert = require('chai').assert;
//testing code

describe("#tail", () => {

  it("should return [2,3] for [1,2,3]", () => {
    const boo = tail([1,2,3]);
    const input = boo.length; 
    const output = 2;
    assert.equal(input, output);
  });

  it("",() => {
    const intialization = tail([1,2,3,4,5,7]);
    const input = intialization.length;
    const output = 5;
    assert.equal(input,output);
  });
});
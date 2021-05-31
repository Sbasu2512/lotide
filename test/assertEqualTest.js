const chai = require('chai');
const assert = chai.assert;
const assertEqual = require('../assertEqual');

describe ('#assertEqual', function(){
  it("should return true if the expected output and actual output are same", () =>{
    const input = "sayantan";
    const output = "Sayantan";
    assert.equal(assertEqual(input),output);
  })
})
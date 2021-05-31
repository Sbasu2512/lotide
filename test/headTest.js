const head = require('../head.js');
const assert = require('chai').assert;

describe ("#head", () => {
  it("returns 1 for [1,2,3,4]", () => {
    assert.strictEqual(head([1,2,3,4]),1);
  });

  
});
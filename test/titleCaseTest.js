const assert = require('chai').assert;
const titleCase = require('../titleCase.js');

describe("#titleCase", () => {
  //console.log(titleCase("THIS is a exAMPle")); should return This Is An Example
  it("should return This Is An Example", () => {
  const input = titleCase("this is an example");
  const output = "This Is An Example";
  assert.equal(input,output);
  });
  // titleCase("this is an example") //should return "This Is An Example"
it("should return This Is An Example", () => {
const input = titleCase("this is an example");
const output = "This Is An Example";
assert.equal(input,output);
});
// titleCase("test") //should return "Test"
it("",() => {
  const input = titleCase("test");
  const output = "Test" ;
  assert.equal(input,output);
});
// titleCase("i r cool") //should return "I R Cool"
it("", () => {
  const input = titleCase("i r cool");
  const output = "I R Cool";
  assert.equal(input,output);
});
// titleCase("WHAT HAPPENS HERE") //should return "What Happens Here"
it("", () => {
  const input = titleCase("WHAT HAPPENS HERE");
  assert.equal(input,"What Happens Here");
})
});



// titleCase("") //should return ""
// titleCase("A") //should return "A"
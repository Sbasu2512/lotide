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

//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
//Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. 
//Therefore it will need to return an object that can represent the stats.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};   //empty object

  for (const item of allItems) {    //
    if (results[item]) {      //if result's item has a truthy value then following code block runs
      // item accesses the key, Obj[key] = access's value stored in it!
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Jason",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
const result1 = countOnly(["karl","Salima","Jason", "Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"], 
{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
console.log(result1["Jason"]);
//console.log(result1["Karima"]);
console.log(result1["Fang"]);
//console.log(result1["Agouhanna"]);
/*
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/
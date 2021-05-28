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
const countOnly = function(allItems, itemsToCount) {
  let counter = 0;
  let item, index, i ;
  index = 0; 
  let search = Object.keys(itemsToCount);
  console.log(typeof(search));

  
 // console.log( "counter value is" ,counter, "times");
  
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//console.log(countOnly(firstNames, ['Fang','Joe']));
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
result1["Jason"];

/*
for( i of itemsToCount){
    index++;
    //console.log(i , "index is: " ,index);
    for(item in allItems){
      //console.log( allItems[item]);
      if(allItems[item].includes(i)){
        counter++;
      }
    }
    if(counter > 0){
      console.log(counter);
    }else {
      console.log(undefined);
    }
  }
*/
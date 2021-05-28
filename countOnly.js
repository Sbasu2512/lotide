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
const countOnly = function(allItems, itemsToCount) {
  let counter = 0;
  let item ;
  for(let i=0; i<itemsToCount.length; i++){
    for(item in allItems){
      if(item === itemsToCount[i]){
        counter++;

      }
    }
    if(counter >0){
      return `Item ${itemsToCount[i]} is found at index: ${i}`;
    }else {
      return `Item ${itemsToCount[i]} can not be found in the array provided`;
    }
  }
    
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

console.log(countOnly(firstNames, 'Fang'));
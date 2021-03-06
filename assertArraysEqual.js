const eqArrays = require('./eArrays');
//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
//Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison
function assertArraysEquals(v1,v2){
  if(eqArrays(v1,v2)){
    return true;
  }else{
    return false;
  }
}

module.exports = {assertArraysEquals};
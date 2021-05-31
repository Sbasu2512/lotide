//Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = (a,b) => {
  if(a.length!=b.length)
  return false;
 else
 {
 // comapring each element of array
  for(var i=0;i<a.length;i++)
  if(a[i]!==b[i])
   return false;
   return true;
 }
}
module.exports = eqArrays ;
//console.log(eqArrays([1, 2, 3], [1, 2, 3]));
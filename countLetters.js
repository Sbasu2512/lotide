const assertEqual = require('./assertEqual');
/*Create a function called countLetters.
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
For example, countLetters('LHL') should return results indicating that L appears twice, and H once.
git add countLetters.js
*/
const countLetters = function(str) {
  let result;
  let count;
  let counts = {};        //create an empty object
if(str.length <=1){
  console.log("enter a word with two letters in it");
}else {
  for(let i=0; i<str.length; i++){
    ch = str.charAt(i); 
    // Get the count for it, if we have one; we'll get `undefined` if we don't know this character yet
    count = counts[ch];
    // If we have one, store that count plus one; if not, store one
    // We can rely on `count` being falsey if we haven't seen it before,
    // because we never store falsey numbers in the `counts` object.
    counts[ch] = count ? count + 1 : 1;
  }
  }
  for (ch in counts) {
    console.log(ch + " count: " + counts[ch]);
}
}

module.exports = countLetters;
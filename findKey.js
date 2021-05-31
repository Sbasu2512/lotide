//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = (obj,callback) => {
  let temp = [];
  for(let x in obj){
    //console.log(x);
    if(callback(obj[x])){     //if(!callback(ob[x])) ==>  if(callback(ob[x]) === false )? 
      console.log(x);
      //return ;
      }
    }
  }
module.exports = findKey;
// findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"
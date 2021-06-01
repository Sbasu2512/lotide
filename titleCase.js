//Title case (or Capital Case) is a specific method of capitalizing the characters of every word in a sentence in order to make it usable as a title or headline.
const titleCase = str => {
  const newStr = str.trim().split(' ');
  //console.log(newStr);
  return newStr.join('');
}

console.log(titleCase("This is A example"));
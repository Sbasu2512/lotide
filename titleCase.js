//Title case (or Capital Case) is a specific method of capitalizing the characters of every word in a sentence in order to make it usable as a title or headline.
  const titleCase = (str) => {
  let newStr = str.toLowerCase().trim().split(" ");
  //console.log(newStr);
  for(let i=0; i<newStr.length; i++){
    newStr[i] = newStr[i].charAt(0).toUpperCase() +  newStr[i].substr(1);
  }
  return (newStr.join(" "));
};
module.exports = titleCase ;

// console.log();  titleCase("this is an example") //should return "This Is An Example"
// console.log();
// console.log();  titleCase("test") //should return "Test"
// console.log();
// console.log();  titleCase("i r cool") //should return "I R Cool"
// console.log();
// console.log();  titleCase("WHAT HAPPENS HERE") //should return "What Happens Here"
// console.log();
// console.log();  titleCase("") //should return ""
// console.log();
// console.log();  titleCase("A") //should return "A"
// console.log();







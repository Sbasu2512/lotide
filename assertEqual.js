const assertEqual= function(actual, expected) {
if(actual === expected){
  console.log("🤩🤩🤩🤩  Assertion passed:" + actual + "===" + expected + "💯💯💯💯");
}else{
  console.log("🛑🛑🛑🛑 Assertion failed:" + actual + "!==" + expected + "🛑🛑🛑🛑");
}
}

assertEqual(1,1);
console.log();
assertEqual(1,5);
console.log();
assertEqual("Sayantan","Basu");
console.log();
assertEqual("Basu","Basu");
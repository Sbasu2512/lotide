const assertEqual = function(actual, expected) {
  console.log("Running the test π€πΌπ€πΌπ€πΌπ€πΌ")
  if (actual === expected) {
    console.log(
      `π€©π€©π€©π€©  Assertion passed: ${actual} === ${expected} π―π―π―π―`
    );
  } else {
    console.log(
      `ππππ  Assertion failed: ${actual} === ${expected} ππππ`
    );
  }
};

module.exports = assertEqual;

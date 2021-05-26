const args = process.argv;
function sum(args) {
  let sum = 0;
  for (let i = 2; i < args.length; i++) {
    sum += parseInt(args[i]);
  }
  return sum;
}
console.log(sum(args));

/* let num1 = parseInt(args[2]);
let num2 = parseInt(args[3]);
sum = num1 + num2; */
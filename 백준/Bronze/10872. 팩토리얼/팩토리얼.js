const input = require("fs").readFileSync("dev/stdin").toString().trim();

function factorial(num) {
  let result = 1;

  if (num === 0 || num === 1) return 1;

  for (let i = 0; i < num; i++) result *= num - i;

  return result;
}
console.log(factorial(input));

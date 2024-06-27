const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [a, b] = input[0].split(" ");
const arr = input[1].split(" ");

let answer = "";

for (i = 0; i <= a; i++) {
  if (b > +arr[i]) {
    answer += arr[i] + " ";
  }
}

console.log(answer);

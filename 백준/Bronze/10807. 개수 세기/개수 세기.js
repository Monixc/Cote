const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const TESTCASE = input[0];

let numbers = [];
numbers = input[1].split(" ");

let key = input[2];
let count = 0;

for (let i = 0; i < TESTCASE; i++) {
  if (numbers[i] === key) {
    count++;
  }
}

console.log(count);

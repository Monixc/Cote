const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "input.txt";
const input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

let x = []; 

for (let i = 1; i < 31; i++) {
  if (input.includes(i)) continue; 
  x.push(i); 
}

x.sort((a, b) => a - b); 
console.log(`${x[0]}\n${x[1]}`); 

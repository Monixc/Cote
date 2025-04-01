const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.
const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let start_month = 0;
let end_month = 0;

for(let i = 0; i <= m1; i++){
    start_month += month[i];
}

for(let i = 0; i <= m2; i++){
    end_month += month[i];
}
console.log((end_month + d2) - (start_month + d1));
const inputs = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

let word = inputs[0].toString();
let num = Number(inputs[1]);

console.log(word[num-1])

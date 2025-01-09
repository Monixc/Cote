const input = require("fs").readFileSync(0).toString().split(" ");

let width = Number(input[0]);
let height = Number(input[1]);

width += 8;
height *= 3;

const res = width * height;

console.log(width + "\n" + height + "\n" + res);
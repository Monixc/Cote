const input = require("fs").readFileSync(0).toString().split(" ").map(Number);
const [a, b] = input;

if(a > b) {
    console.log(a - b);
}
else{
    console.log(b - a);
}
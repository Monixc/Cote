const input = require("fs").readFileSync(0).toString().split(" ").map(Number);

const [h, w] = input;
let b = (10000*w)/(h*h);

console.log(parseInt(b));
if(b > 25){
    console.log("Obesity");
}

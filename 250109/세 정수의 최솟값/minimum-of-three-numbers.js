const fs = require('fs');
let input = fs.readFileSync(0).toString().split(" ").map(Number);
const [a,b,c] = input;

let res = 0;

if(a<=b && a<=c){
    res = a
}

if(b<=a && b<=c){
    res = b
}

if(c<=a && c<=b){
    res = c
}
console.log(res)
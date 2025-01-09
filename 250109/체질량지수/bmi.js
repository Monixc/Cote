const fs = require('fs');

let [a,b] = fs.readFileSync(0).toString().split(' ').map(Number);

const bmi =  Math.floor((10000*b) / (a*a))

if(bmi>25){
    console.log(bmi)
    console.log('Obesity')
}else{
    console.log(bmi)
}

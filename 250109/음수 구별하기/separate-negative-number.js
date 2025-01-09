const input = require("fs").readFileSync(0).toString();
const n = Number(input);

if(n < 0)
{
 console.log(n + "\n" + "minus");   
} 
else{
    console.log(n);
}
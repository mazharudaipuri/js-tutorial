const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const hundreds = 1000000
//console.log(hundreds.toLocaleString("en-IN"));


// Maths //

console.log(Math);//object
console.log(Math.abs(-4)); //convert -ve to +ve
console.log(Math.round(4.6));//make it round figure
console.log(Math.ceil(4.2));//take top value
console.log(Math.floor(4.9));// take low value
console.log(Math.min(2,3,4,5,6,7));// minimum value
console.log(Math.max(2,3,4,5,6,7));// maximum value
console.log(Math.random());// the value will comes between 0 to 1
console.log(Math.random()*10 +1);// the value will be more than zero
console.log(Math.floor(Math.random()*10) +1);// it will take single number value

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max-min+1)) + min);// it will take double number value minimum 10

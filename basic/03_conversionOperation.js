let score = 55

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"55" => 55 number will be the output
// "55abc" => NaN
// true => 1; flase => 0

let isLoggedIn = "mazhar"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true; 0 => false
// "" => false
// "mazhar" => true

let someNumber = 55

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);

let value = 5
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = "mazhar"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true);
console.log(+true);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
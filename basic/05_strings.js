const name = "mazhar"
const repoCount = 50

//console.log(name + repoCount); Do not use this method...

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String("alimazhar")

console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('z'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  alimazhar   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mazhar.com/mazhar%20ali"
console.log(url.replace('%20', '-'))
console.log(url.includes('udaipuri'))

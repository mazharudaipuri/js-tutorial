//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["avenger","hulk","iron-man","spider-man","superman"]

const myArr2= new Array(1,2,3,4)
//console.log(myArr[2]);

//Array Method

// myArr.push(6)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 4)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 7)
console.log(myn2);
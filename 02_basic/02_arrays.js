const marvel_heros = ["thor","hulk","iron-man","spiderman"]
const dc_heros = ["superman","flash","batman", "he-man"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
console.log(Array.isArray("mazhar"))
console.log(Array.from("mazhar"))
console.log(Array.from({name:"mazhar"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
console.log(Array.of(score1+ score2+ score3))
const marvelHeros =["thor","ironman","spiderman"]
const dc_heros =["superman","flashman","batman"]


// marvelHeros.push(dc_heros)

// console.log(marvelHeros)
// console.log(marvelHeros[3][1])

// const allheros = marvelHeros.concat(dc_heros)
// console.log(allheros)

// const all_new_heros = [...marvelHeros,...dc_heros]

// console.log(all_new_heros)

const anotherarray = [1,2,3,[1,2,3,],5,[3,5,[1,2,5,6]]]

const rea_another_arry = anotherarray.flat(Infinity)
console.log(rea_another_arry)

console.log(Array.isArray("vivek"))
console.log(Array.from("vivek"))

console.log(Array.from({name : "vivek"}))  //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))
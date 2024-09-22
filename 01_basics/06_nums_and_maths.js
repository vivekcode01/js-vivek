const score = 299;
// console.log(score)

const balance = new Number(300)
// console.log(balance)

// console.log(balance.toString().length)
 //console.log(balance.toFixed(2))

const othernumber = 123.987;

//console.log(othernumber.toPrecision(3))

const hundreds = 100000000;

//console.log(hundreds.toLocaleString('en-IN'));


//****************MATHS***************************/


// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.67))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,5,6,1,3))
// console.log(Math.max(3,5,2,7,5,0,9))

console.log(Math.random(3))
console.log(Math.random()*10 +1)
console.log(Math.floor(Math.random()*10) +1)

const min= 10;
const max= 20;

console.log(Math.floor(Math.random()*(max-min +1)) +min)




//   let obj1 = {key : 'value'}
//   let obj2 = {key : 'value'}
//   console.log(obj1==obj2)
//   console.log(obj1===obj2)
// expected output false false because even though they have same value but they're still different object in the memory.

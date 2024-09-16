//primitive

// 7 type: string ,number,null,undefined,boolean,symbol,bigint

const score =100
const scorevalue= 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id===anotherId)

// const bigNumber = 2452614816255861542n

// Reference (Non primitive)

// Array, Objects, Functions

const hero =["vivek","sakti","doga"]
let myObj ={
    name :"vivek",
    age : 23,
}

const myFunction =function(){
    console.log("hello world")
}

console.log(typeof anotherId)


// https://262.ecma-international.org/5.1/#sec-11.4.3

//*************************************************************** */

//stack(primitive)  heap(non primitive)

let myname = "vivek kumar"
 
let anothername= myname;
anothername = "rohit";

console.log(myname)
console.log(anothername)

let userOne= {
    email: "vivek@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="vivek2892@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
//for 

// ["", "", ""]
// [{}, {}, {}]


let arr = [1,2,3,4,4,5]

for (const num1 of arr) {
    //console.log(num1)
    ;
    
}

const greetings ="hello world";

for (const greet of greetings) {
   // console.log(`Each char is ${greet}`)
}

//map

const map = new Map()

map.set('IN', 'INDIA')
map.set('USA','UNITED STATE OF AMERICA')
map.set('FR','FRANCE')
map.set('IN','INDIA')

//console.log(map)

for (const key of map) {
    //console.log(key)
}

for (const [key , value] of map) {
//console.log(key , ":-", value)    
}

const myObject ={
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key , value] of myObject) {
//     console.log(key ,"-:", value)
// }
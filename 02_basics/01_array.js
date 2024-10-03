//array


const myArr =[0,1,2,4,5]
const myHeros =["shaktiman","superman"]

const myArr2 = new Array(0,1,3,4,2)

// console.log(myArr[3])

//Array method

// myArr.push(6)
// myArr.push(8)
// myArr.pop()
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(4))

// const newarr = myArr.join()   
// console.log(myArr)
// console.log( newarr)

//slice ,splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr)


const myn2 =myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr)
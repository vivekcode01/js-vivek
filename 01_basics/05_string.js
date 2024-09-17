const name = "vivek"
const repoCount = 40

//console.log(name + repoCount + " Value")

console.log(`hello my name is ${name} and my repocount is ${repoCount}`)

const gameName = new String('vivek-kumar-123-com')

// console.log(gameName[1])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('v'))


const newstring = gameName.substring(0,4)
console.log(newstring)

const anotherstring = gameName.slice(-8,4)
console.log(anotherstring)


const newstringone = "  vivek  kumar    ";
console.log(newstringone)
console.log(newstringone.trim())


const url = "https://vivek.com/vivek20%kumar"

console.log(url.replace('20%' , '=---'))

console.log(url.includes('vivekf'))

console.log(gameName.split('-'))
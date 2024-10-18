const myObject={
    js: 'javascript',
    cpp:"c++",
    ruby:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ['java','py','cpp','ruby']

for (const key in programming) {
    console.log(programming[key])
}

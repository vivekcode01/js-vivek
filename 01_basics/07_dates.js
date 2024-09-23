// date

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())


//let myCreatedDate = new Date(2023,1,23);
//let myCreatedDate = new Date(2023,1,23 ,5,3,0);
//let myCreatedDate = new Date("202-1-23");
let myCreatedDate = new Date("04-23-2024");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(myTimeStamp/1000))
let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());


// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
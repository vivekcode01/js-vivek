//if

const isuserloggedin = true;
const temperatur = 41;
// if(temperatur<40){
//     console.log("temperatur less than 50")
// }
// else{
//     console.log("temperature more than 50")
// }

//console.log("execute")

//>,<,==,!=,===,<=,>=

// const score =200
// if(score>100){
//     let power = "fly";
//     console.log(`user : ${power}`)
// }
// console.log(`user : ${power}`)

const balance =1000;
//if (balance>500)     console.log("test");              //implicit scope

// if (balance>500)     console.log("test"), console.log("test2")  //imature code

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userloggedin = true;
const debitcard = true;
const Loggedinfromgoogle = false;
const LoggedinfromEmail = true;

if(userloggedin && debitcard && 2==2){
    console.log("Allow to buy courses");
}

if(LoggedinfromEmail || Loggedinfromgoogle){
    console.log("User LOgged in")
}
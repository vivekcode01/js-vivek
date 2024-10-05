//singleton
//object.creat  // we will study later


//object literals

const mysym = Symbol("key1")

const Jsuser = {
    name : "vivek",
    [mysym] : "key1",
    "full name": "vivek kumar",
    age : 19,
    location : "delhi",
    email :"viek2321@gmial.com",
    isLoggedin : false,
    lastloginDays: ["monday","saturday"]


}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mysym])

Jsuser.email = "vivek23google@gmail.com";    //to change the object

// Object.freeze(Jsuser)    //to freez the object, so we cannot change the vlue futher

Jsuser.email ="vivein3iq@gmial.com"

// console.log(Jsuser)


Jsuser.greeting = function(){
    console.log("hello js user");
}

Jsuser.greetingtwo = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo())
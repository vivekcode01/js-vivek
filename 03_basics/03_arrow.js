const user = {
    username: "vivek",
    price: 999,

    welcomeMessage: function    (){
        console.log(`${this.username}`, "welcome to site")
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this)



// function chai(){
//    // let username = "vivek"
//     console.log(this.username)
// }
// chai()

// const chai =function(){
//  let username = "vivek"
//  console.log(this.username)

// }
// chai()



// const chai = ()=>  {                            //arrow

//     let username = "vivek"
//     console.log(this)
// }
// chai()


// const addtwo =(num1,num2)=>{
//     return num1+num2;

// }
// console.log(addtwo(3,4))



//const addtwo =(num1,num2)=>    num1+num2;                    //implicit return ,and it applies for only one line

// const addtwo =(num1,num2)=>    (num1+num2)

const addtwo =(num1,num2)=>    ({username : "vivek"})

console.log(addtwo(3,4))





// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


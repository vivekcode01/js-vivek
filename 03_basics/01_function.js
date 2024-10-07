
function symyname(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");

}

//symyname()    

// function addtwonumber(Number1 , Number2){
//     console.log(Number1 +Number2);
// }

function addtwonumber(Number1 , Number2){
    // let result = Number1 + Number2
    // console.log("vivek")
    // return result

    return Number1+Number2
  

}

const result =addtwonumber(3,5)

//console.log("Result: ", result );


function loginusermessage(username = "sam"){
    if(username=== undefined){                             //insted of username==undefined ,we can write !username
        console.log("please enter a username")
        return
    }
    return `${username} is logged in`
}

//console.log(loginusermessage("vivek"))
//console.log(loginusermessage())

function calculatecartprice (val1,val2 ,...num1){
    return num1;
}

console.log(calculatecartprice(455,45,64868,468468464,486,5))



const user ={
    username :"vivek",
    price: 199
}

function handleanyobject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleanyobject(user)
handleanyobject({
    username : "sam",
    price: 999
})


const mynewarray =[100,200,300,400]

function returnsecondvalue(getmyarray){
   return getmyarray[1]  
}
//console.log(returnsecondvalue(mynewarray))

console.log(returnsecondvalue([100,20,3,400]))

const userEmail =[]


if(userEmail){
    console.log("got user email")

}
else{
    console.log("dont have user email")
}

//falsy value
// false , 0 ,-0,BigInt,NaN, null  ,undefined,  ""


//truthy value
//"0"  , " "  , "false"  ,[]  ,{}  , funcation(){}

// if (userEmail.length=== 0) {
//     console.log("Array is empty")
    
// }

const emptyobject = {}

if(Object.keys(emptyobject).length===0){
    console.log("this object is object");
}


//Nullish coalescing operator (??):null undefined

let val1;
//val1 =5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 20;
val1 = null ?? 10 ?? 20;


console.log(val1)


//Terniary operator

//Condition ? true : false

const iceTeaprice = 100;
iceTeaprice <=80 ? console.log("iceteaprice is less than 80 ")  : console.log("iceteprice is more than 80")
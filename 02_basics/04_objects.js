//const tinder = new Object()   // this is singleton object 

const tinder ={}

tinder.id = "123avc"
tinder.name = "vivek"
tinder.isloogedin =false

//console.log(tinder)

const regularuser ={
    email : "viekgoogle@gmail.com",
    fullname :{
        userfullname :{
            firstname : "vivek",
            lastname : "kumar"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}


//const obj4 ={obj1,obj2,obj3}
//const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1,...obj2,...obj3}     //spread operator


//console.log(obj4)

const user = [
    {
        id:1,
        email : "131cn@gmail.com",

    },

    {
        id: 2,
        email:"venioq23@gmial.com"

    },
    {
        id:3,
        email:"cnwrn@gmail.com"
    }
]

user[1].email
console.log(tinder);

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))


console.log(tinder.hasOwnProperty('isloogedin'))
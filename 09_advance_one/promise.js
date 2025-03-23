const promiseOne = new Promise(function(resolve, reject ){
    // Do an async task
    // db calls , cyptography, netwrok
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("promise consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chai@emaple.com",})
    }, 1000)
    
})

promisethree.then(function(user){
    console.log(user)
})



const promise4 =new Promise(function(resolve , reject){
       setTimeout( function (){
        let error = true;
        if(!error){
            resolve({username : "hivesh", password:"123"})
        }else{
            reject('SOMETHING WENT WRONG')
        }
        
       },1000)
})


promise4.then((user)=>{
        console.log(user);
        return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The promise is either resolved or reject"))



const promise5 =new Promise(function(resolve, reject){
        setTimeout(function(){
            let error =true;
           if(!error) {resolve({username : "javascript " , password :"1234"})
        }else{
    reject("ERROR : JS WENT WRONG ")}

        },1000)
})

async function consumepromise5(){
   try {
    const response = await promise5
    console.log(response);
   } catch (error) {

    console.log(error);
   }
}

consumepromise5()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json
//         console.log(data)
//     } catch (error) {
//         console.log('E:', error);
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();

})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
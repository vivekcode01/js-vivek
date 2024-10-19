const myNums = [1,2,3,4]

// const Mytotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval;
// },3)


const Mytotal = myNums.reduce((acc ,currval)=> acc + currval , 3)

//console.log(Mytotal)


const  Shoppingcart  = [
    {
        itemname : "js course",
        price : 1999
    },

    {
        itemname : "py course",
        price : 999
    },


    {
        itemname : "mobile devlo course",
        price : 12299
    },


    {
        itemname : "data science course",
        price : 19999
    }
]

// const pricetopay =Shoppingcart.reduce(function (initial,item) {
//     return initial + item.price 
// },0)


const pricetopay = Shoppingcart.reduce((acc ,item ) => acc + item.price ,0)

console.log(pricetopay)
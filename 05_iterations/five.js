const coding =['js','java','phython','ruby','cpp']

// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach((val)=> {
//     console.log(val);
    
// })

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)

// coding.forEach((item, index , arr)=>{
//     console.log(item,index,arr)
// })


const mycoding =[
    {
        languagename : "javascript",
        languageFilename :"js"
    },
    
    {
        languagename : "python",
        languageFilename :"py"
    },
    
    {
        languagename : "java",
        languageFilename :"java"
    }
    
]

mycoding.forEach((item)=>{
    console.log(item.languagename)
})
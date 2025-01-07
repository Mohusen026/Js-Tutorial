const coding=["js","ruby", "python", "cpp","java"]
// coding.forEach(function (item){
    // console.log(item);    
// })

// coding.forEach( (val) =>{
//  console.log(val); 
// })

// function printMe(num) {
//     console.log(num);    
// }
// coding.forEach(printMe)

coding.forEach( (items,index,arr1) => {
//   console.log(items,index,arr1);  
})


const myCoding=[
    {
        languagename:"Javascript",
        languageFileNAme:"js"
    },
    {
        languagename:"Java",
        languageFileNAme:"java"
    },
    {
        languagename:"Python",
        languageFileNAme:".py"
    }
]

myCoding.forEach( (item) =>
{
    console.log(item.languagename);    
})
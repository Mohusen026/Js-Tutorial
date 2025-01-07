let myNumbers=[1,2,3,4,5]

// let newNums=myNumbers.map( (num) => 
// {
//     return num + 5
// })
// console.log(newNums);


// let newNums=myNumbers
//             .map( (num) => num * 10)
//             .map( (num)=>num + 1 )
//             .filter( (num) => num > 22)
            
// console.log(newNums);


let newNums=myNumbers
            .map( (num) =>
                { return num * 10})
            .map( (num)=>{
                return num + 1} )
            .filter( (num) => 
                { return num > 22} )
            
console.log(newNums);

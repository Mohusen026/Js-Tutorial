// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol,Biglnt



let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber=2564785465146514411n
console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

// const heros =["shaktiman","naagraj","doga"]
// {
//     name:"hitesh",
//     age:22
// }

// const myFunction = function(){    
//     console. log("Hello world");
// }

// console.log(typrof(myFunction))
// https://262.ecma-international.org/5.1/#sec-11.4.3


// ====================================================================

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename="Hellodotcom"

let anothername = myYoutubename
anothername="my work is done"
console. log (myYoutubename) ;
console. log (anothername) ;

let userOne ={
email: "user@google.com",
upi: "user@ybl",
}

let userTwo=userOne
userTwo. email="Impero@google.com"
console. log (userOne.email);
console. log (userTwo.email);
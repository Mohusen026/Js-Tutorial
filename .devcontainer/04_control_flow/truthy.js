const userEmail = []

if (userEmail) {
    console.log("Got user email");    
} 
else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }



// !!!!!!!!!!!!!!!!!!!!!!  check the Array is empty or not!!!!!!!!!!!!!!!!!!!!!!!!!
if (userEmail.length === 0) {
    
    // console.log("Array is Empty");    
}



// !!!!!!!!!!!!!!!!!!!!!!  check the Object is empty or not!!!!!!!!!!!!!!!!!!!!!!!!!
const emptyobj={}

if (Object.keys(emptyobj).length === 0) {
    // console.log("Object is Empty");    
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
val1=null ?? 88
val1=5 ?? 60
val1= null ?? 26
val1= undefined ?? 99
val1= undefined ?? 1 ?? 4

// console.log(val1);


// Terniary Operator
// condition ? true:true

const hotTeaPrice=100
hotTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80");





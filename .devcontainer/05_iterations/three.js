// +++++++++++++  forof loop  ++++++++++++++++++++++++

let arr=[10,20,33,40,50]
for (const num of arr) {
    // console.log(num);    
}

// ======= for string==========
let str="Hello Husen!"
for (const greet of str) {
    if (greet == " "){
        continue         
    }
//    console.log(`Each Character are: ${greet}`); 
}


// ========= Maps =========

const map=new Map()
map.set("IN","Indian")
map.set("USA","United State of America")
map.set("TUR","Turkey")

// for (const key of map) {
//     console.log(key);    
// }

for (const [key,value] of map) {
    // console.log(key,":-",value);    
}

const myObj={
    "game1":"Mario",
    "game2":"Spideman",
    "game3":"Cricket"
}

for (const [key,value] of myObj) {
    // console.log(key,":-",value);  // It show error beacuse the myObj is not iterable  
}
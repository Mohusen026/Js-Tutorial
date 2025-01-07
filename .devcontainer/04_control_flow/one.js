// if(2=="2"){
//     console.log("executed");    
// }

if(2==="2"){
    // console.log("executed");    
}

// const temp=77

// if (temp===72) {
//     console.log("less than 67");    
// }
// else{
//     console.log("temp is greater than 80");    
// }

const score=250
if (score >150) {
    let power ="fly"
    // console.log(`User power: ${power}`)
 }
// console.log(`User power: ${power}`)




// ========================implicit scope=============================
// const balance=800
// if (balance > 500) console.log("test"),console.log("test2");






// =======================nested if=========================
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }
 




// ********************AND || OR **********************************
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
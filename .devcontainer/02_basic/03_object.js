// Singleton
// Object.create


//object literals

const mySym=Symbol("helloAll")
const mySym1=Symbol("helloAll1")
const oldUser={
    name:"husen",
    "full name":"Haji Husen",
    [mySym]:"go to home",
    mySym1:"go to home 1",//both are diff go to home and go to home1
    age:20,
    location:"kashmir",
    email:"husen@gmail.com",
    isLoggedIn:false,
    lastloginDays:["Monday","Saturday"],
}

// console.log(oldUser.email);
// console.log(oldUser["email"]);
// console.log(oldUser["full name"]); // interesting check 6:50
// console.log(oldUser[mySym]);
// console.log(typeof mySym); //
// console.log(oldUser.mySym1);
// console.log(typeof oldUser.mySym1); //

// oldUser.email="husen@ganpatuniversity.com"
// Object.freeze(oldUser) // when we use the freeze after that the we can't update any value in the format
// oldUser.email="uvpce@gmail.com"
// console.log(oldUser);

oldUser.greeting=function()
{
    console.log("hello Old User");    
}

console.log(oldUser.greeting);

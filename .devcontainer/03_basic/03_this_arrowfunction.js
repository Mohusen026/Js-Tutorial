const user={
    username:"husen",
    price:99,

    welcomemessage:function(){
        console.log(`${this.username} welcome to the website`);
        // console.log(this);
        
        
    }
}
// this means the current object lo refer karta hai!!!!!!

// user.welcomemessage()
// user.username="Kabir"
// user.welcomemessage()

// console.log(this);

// function code()
// {
//     let username="husen"
//     console.log(this.username);    
// }
// code()

// ****************** this keyword is work with object only if you are used inside the function so you will get the undefined in the output 


// const code=function ()
// {
//     let username="husen"
//     console.log(this.username);    
// }
// code()


// const code = () =>
// {
//     let username="husen"
//     console.log(this.username);    
// }
// code()


const code = () =>
    {
        let username="husen"
        console.log(this);    
    }
    // code()
 
// const addTwo=(num1,num2)=>
// {
//     return num1+num2
// }
// console.log(addTwo(20,11))



// +++++++++++++++++++  Implicit function in one line ++++++++++++++++++++++++++++
// const addTwo=(num1,num2)=> num1+num2
// console.log(addTwo(20,11))


//  two to defined the  implicit function are as follow
// const addTwo=(num1,num2)=> (num1+num2) //<= these is used in the React most
// console.log(addTwo(20,11))

// ====================== Most Importance ================================

// agar aapne () parenthesis used kiya hai tu return keyword likhane ki jaro ratt nahi hai
// agar aapne {} curly baresis uused kiya hai tu aapko compalsary retuen keyword used karna padega

// const addTwo=(num1,num2)=> ({username:"mohammad"})
// hai object ko return karne ke liye () parenthesis the wrap karna padega =>({username:"mohammad"}) like these 
// agar aapne object ko parenthesis mai wrap nahi kiya tu vo undifined print karega
// console.log(addTwo(20,11))




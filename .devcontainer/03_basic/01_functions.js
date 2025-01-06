function addTwoNumbers (number1,number2){
// let result = numberl + number2
    return  number1+number2
}

const result= addTwoNumbers(8,4)
// console.log("Result:",result);

function loginUserMessage(username="karan") {
        if(!username) {
            // console.log("please enter a username");
            return
        } 
        return `${username} just logged In`
}

// console.log(loginUserMessage());

// function calculateCartPrice(...num1)
// {
//     return num1
// }

// console.log(calculateCartPrice(550,874,482));

function calculateCartPrice(val1,val2,...num1)
{
    return num1
}

console.log(calculateCartPrice(550,874,482,1400));


const user={
    username:"haji",
    price:485
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}

handleObject(user)
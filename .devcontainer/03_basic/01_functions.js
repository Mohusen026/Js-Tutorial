function addTwoNumbers (number1,number2){
// let result = numberl + number2
    return  number1+number2
}

const result= addTwoNumbers(8,4)
// console.log("Result:",result);

function loginUserMessage(username="karan") {
        if(!username) {
            console.log("please enter a username");
            return
        } 
        return `${username} just logged In`
}

console.log(loginUserMessage());

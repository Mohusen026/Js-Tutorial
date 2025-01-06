// const tinderUser={} // these is not singletone object

// const tinderuser=new Object()

const tinderUser={}

tinderUser.id="user12"
tinderUser.name="pavan"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"new@gmail.com",
    fullname:{
        userName:{
            firstname:"Mohammadhusen",
            lastname:"Haji"
        }
    }
}

// console.log(regularUser.fullname.userName.firstname);

const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}
const obj3={5:"E",6:"F"}
// const obj4=Object.assign({},obj1,obj2,obj3)
// const obj4=Object.assign(obj1,obj2,obj3) //both are same 
// console.log(obj4);

const obj4={...obj1,...obj2,...obj3} //mainly used these one to combimed the object
// console.log(obj4);

const users=[
    {
        id:1,
        email:"happy@gmail.com",
    },
    {
        id:1,
        email:"happy@gmail.com"
    },
    {
        id:1,
        email:"happy@gmail.com"
    },
    {
        id:1,
        email:"happy@gmail.com"
    },
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log (Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));







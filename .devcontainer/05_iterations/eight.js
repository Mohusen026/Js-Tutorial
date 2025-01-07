// const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval)
// {
//     return acc+currval
// },4)

// console.log(myTotal);



// let newNum=[10,20,30,40]

// let num=newNum.reduce( (acc,currval) =>
// {
//     console.log(`acc:${acc} and currval ${currval}`);    
//     return acc+currval
// },10)
// console.log(num);


const shoppingCart=[
    {
        itenName:"Js Course",
        price:599
    },
    {
        itenName:"Java Course",
        price:899
    },
    {
        itenName:"UI/UX Course",
        price:399
    },
    {
        itenName:"PHP Course",
        price:699
    },
    {
        itenName:"Python Course",
        price:1599
    },
]

let payPrice=shoppingCart.reduce( (acc,item) =>
{
    return acc+item.price
},0)

console.log(payPrice);
